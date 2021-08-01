// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`
}

const ROOTS = {
  app: "/app",
}

export const PATH_HOME = {
  dashboard: ROOTS.app,
}

export const PATH_APP = {
  root: ROOTS.app,

  app: {
    counter: path(ROOTS.app, "/counter"),
    greeting: path(ROOTS.app, "/greeting"),
    helloWorld: path(ROOTS.app, "/hello-world"),
  },
}
