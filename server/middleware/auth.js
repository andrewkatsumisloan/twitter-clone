import jwt from 'jsonwebtoken';

// When the user signs in, he/she is given a token, this middleware is used to authentiacate actions of the user.

// User wants to like the post, they click the like button.
// This takes them to the auth middleware, which checks if the user is authenticated (then calls next if so).
// If the user has correct permissions, they are allowed to like the post.

const auth = async (req, res, next) => {
    try {
        // console.log('This is request header...', req.headers)
        // console.log('This is request headers.authorization: ', req.headers.authorization)
        // console.log('This is request headers.authorization split:', req.headers.authorization.split(" ")[1])
        const token = req.headers.authorization.split(" ")[1];

        let decodedData;

        decodedData = jwt.decode(token);
        req.userId = decodedData?.sub;

        next();

    } catch (error) {
        console.log(error)
    }
}

export default auth;