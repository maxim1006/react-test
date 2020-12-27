const module1 = () => {
    Promise.reject('module1 promise').then((value: string) =>
        console.log(value)
    );
    console.log('module1 sync');
};

export default module1;
