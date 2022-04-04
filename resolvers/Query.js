exports.Query = {
    hello: () => 'world',
    ping: () => 'pong',
    site: (parent, args, context) => {
        const {add, minus, site} = context;
        console.log(add(1, 2));
        console.log(minus(5, 2));

        const {id} = args;
        return site.find(item => item.id === id);
    }
};