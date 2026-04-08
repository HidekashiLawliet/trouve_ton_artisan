function json(response, payload, statusCode = 200) {
    response.writeHead(statusCode, {
        "Content-Type": "application/json; charset=utf-8",
    });
    response.end(JSON.stringify(payload));
}

function notFound(response) {
    json(response, { error: "Route not found" }, 404);
}

module.exports = {
    json,
    notFound,
};
