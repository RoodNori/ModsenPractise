//задача в соответствии с первым вариантом

let timer;

(() => {
    timer = setInterval(() => {
        console.log(new Date());
    }, 100)
}
)()

    setTimeout(() => {
        clearInterval(timer);
    }, 1000)