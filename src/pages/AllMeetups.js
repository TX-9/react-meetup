import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
    {
      id: 'm1',
      title: 'This is a first meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
      id: 'm2',
      title: 'This is a second meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
  ];

function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);
    
    // callback function only runs under the certain circumstance
    useEffect(() => {
      setIsLoading(true);
      fetch(
        'https://j-meetup-default-rtdb.firebaseio.com/meetups.json')
      .then(response => {
        return response.json(); //parsing json to JavaScript object. 
      }).then(data => { // because response.json() return Promise
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key]
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
      // all external dependency must be included
    }, []); // useEffect(()=>{}) is the same as use fetch without useEffect
    // [] means only execute callback when Component renders for the first time
    // subsequent changes by setIsLoading does not trigger callback again

    if (isLoading) {
      return <section>
        <p>Loading...</p>
      </section>
    }
    return (
        <section>
            <h1>All meetups</h1>
            <ul>
                <MeetupList meetups={loadedMeetups} />
            </ul>
        </section>
    );
}

export default AllMeetupsPage;