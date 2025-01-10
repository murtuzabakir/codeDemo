import { getDemos, postDemo } from "@/src/services/lms/demo.service";

const payload = { name: "demo" };

const Demo = () => {
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        const { data, error } = await getDemos();
        // do something with the data
    };

    const postData = async () => {
        const { data, error } = await postDemo(payload, setLoading);
    };

    return (
        <>
            {loading && <p>Loading....</p>}
            <div>Another UI that needs Demo</div>
        </>
    );
};

export default Demo;
