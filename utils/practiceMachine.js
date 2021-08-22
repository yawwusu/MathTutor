import { createMachine, interpret } from "xstate";

const initial = "unsolved";

const context = {
  prev_question_id: 0,
  curr_question_id: 0,
  next_question_id: 1,
  questions: [],
  choice: null,
  progress: 0,
};

const states = {
  unsolved: {
    id: "unsolved",
    initial: "idle",
    states: {
      idle: {
        id: "idle",
        on: {
          CHOOSE: "choosing",
        },
      },
      choosing: {
        on: {
          SUBMIT: "#solved",
        },
        // on: {
        //   A: {
        //     target: "submitting",
        //     actions: ["saveChoice"],
        //   },
        //   B: {
        //     target: "submitting",
        //     actions: ["saveChoice"],
        //   },
        //   C: {
        //     target: "submitting",
        //     actions: ["saveChoice"],
        //   },
        //   D: {
        //     target: "submitting",
        //     actions: ["saveChoice"],
        //   },
        // },
      },
      // submitting: {
      //   on: {
      //     SUBMIT: "#solved",
      //   },
      // },
    },
  },
  solved: {
    id: "solved",
    initial: "checking",
    states: {
      checking: {
        // on: {
        always: [
          { target: "success", cond: "isCorrect" },
          { target: "failure" },
        ],
        // },
      },
      success: {
        on: {
          NEXT: {
            target: "#unsolved",
            actions: ["getNextQuestion"],
          },
          PREV: {
            target: "#practice.hist",
            actions: ["getPrevQuestion"],
            cond: "isPreviousEnabled",
          },
        },
        activities: "updateProgressBar",
      },
      failure: {
        id: "failure",
        on: {
          NEXT: {
            target: "#unsolved",
            actions: ["getNextQuestion"],
          },
          PREV: {
            target: "#practice.hist",
            actions: ["getPrevQuestion"],
            cond: "isPreviousEnabled",
          },
        },
      },
    },
  },
  hist: {
    type: "history",
    history: "deep",
  },
};

const options = {
  actions: {
    // saveQuestions: assign({
    //   questions: (context, event) => event.data,
    // }),
    saveChoice: (context, event) => {
      context.choice = event.type;
    },
    getNextQuestion: (context, event) => {
      context.prev_question_id = context.curr_question_id;
      context.curr_question_id = context.next_question_id;
      context.next_question_id += 1;
      // context.curr_question_id += 1;
      context.choice = null;
    },
    getPrevQuestion: (context, event) => {
      context.next_question_id = context.curr_question_id;
      context.curr_question_id = context.prev_question_id;
      context.prev_question_id -= 1;
      console.log("previous question");
    },
  },
  activities: {
    updateProgressBar: (context, event) => {
      console.log("updating progress bar");
    },
  },
  guards: {
    isPreviousEnabled: (context) => context.prev_question_id > 0,
    isCorrect: (context) =>
      context.choice === context.questions[context.curr_question_id].answer,
  },
};

const config = {
  id: "practice",
  context,
  initial,
  states,
};

const practiceMachine = createMachine(config, options);
const practiceService = interpret(practiceMachine)
  .onTransition((state) => console.log(state.value))
  .start();

export { practiceMachine, practiceService };
