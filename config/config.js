const responseConfig = {
  forbidden: {
    error: true,
    code: 403,
    message: "forbidden",
    response: null,
    count: 0,
  },
  unauthorized: {
    error: true,
    code: 401,
    message: "unauthorized",
    response: null,
    count: 0,
  },
  notFound: {
    error: true,
    code: 404,
    message: "not found",
    response: null,
    count: 0,
  },
  internalServerError: {
    error: true,
    code: 500,
    message: "internal server error",
    response: null,
    count: 0,
  },
  timeout: {
    error: true,
    code: 408,
    message: "request timeout",
    response: null,
    count: 0,
  },
};


export {responseConfig}