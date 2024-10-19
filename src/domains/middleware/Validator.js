
export const ValidationSource = {
    BODY: 'body',
    HEADER: 'headers',
    QUERY: 'query',
    PARAM: 'params'
}



export default (schema, source = ValidationSource.BODY) => (req, res, next) => {
    const { error } = schema.validate(req[source]);

    if(error === undefined) return next();
    const { details } = error
    const message = details.map((i) => i.message.replace(/['"]+/g, '')).join(', ');

    return res.status(400).json({ message });
} 