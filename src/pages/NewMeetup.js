import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
    const history = useHistory();
    function addMeetupHanlder(meetupData) {
        // 'meetups.json' firebase format
        fetch(
            'https://j-meetup-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-type': 'application/json'
                }
            }
        ).then(()=>{
            history.replace('/');
        });
    }
    return <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHanlder}/>
    </section>
}

export default NewMeetupPage;