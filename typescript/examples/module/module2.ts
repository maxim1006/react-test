const module2 = () => {
    Promise.reject('module2 promise').then((value: string) =>
        console.log(value)
    );
    console.log('module2 sync');
};

export default module2;
