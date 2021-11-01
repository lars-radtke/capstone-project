// const [fakeLoadActive, setFakeLoadActive] = useState(true)
// const onFakeLoadEnd = () => {setFakeLoadActive(!fakeLoadActive)}

export const useFakeLoad = (duration, onFakeLoadEnd) => {
    setTimeout(function () {
        onFakeLoadEnd();
    }, duration);
};
