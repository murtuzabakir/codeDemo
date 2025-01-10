import { getDemos, postDemo } from "@/src/services/lms/demo.service";

const payload = { name: "demo" };

const Demo = () => {
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        const { data, error } = await getDemos();
    };

    const postData = async () => {
        const { data, error } = await postDemo(payload, setLoading);
    };

    return (
        <>
            {loading && <p>loading....</p>}
            <div>Demo UI goes here</div>
        </>
    );
};

export default Demo;
