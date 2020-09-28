document.onload = function () {
    console.log ('module2.js')
    func1()
    func2()
}

func3 = () => {
    func1();
    func2();
}