import classes from './MeetupList.module.css';
import MeetupItem from './MeeupItem';

function MeetupList(props) {
    return (
        <ul className={classes.list}>
            {props.meetups.map(m => (
                <MeetupItem 
                key={m.id} 
                id={m.id}
                image={m.image}
                title={m.title}
                address={m.address}
                description={m.description}
                />

            ))
            }
        </ul>
    );
}

export default MeetupList;