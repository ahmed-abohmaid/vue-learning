export const validateJobId = (to, from, next) => {
  const id = Number(to.params.id);
  if (isNaN(id)) {
    next({ path: "/404" });
  } else {
    next();
  }
};
