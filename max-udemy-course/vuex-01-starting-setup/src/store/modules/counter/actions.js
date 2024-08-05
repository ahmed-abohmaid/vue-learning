export default {
  increment(context, { value }) {
    setTimeout(() => {
      // context.commit({
      //   type: 'increment',
      //   value,
      // });
      context.state.count += value;
    }, 2000);
  },
};
