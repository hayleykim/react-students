import { useState } from "react";
import Score from "./Score";

const Student = (props) => {
    const {students} = props;

    // const studentLists = students.map((item, idx) => (
    //     <Student />
    // ));

    return (
        <div>
            {students.map((student, idx) => (
                <div key={idx}>
                    <div>Name: {student.name}</div>
                    <div>Bio: {student.bio}</div>
                    <Score scores={student.scores} />
                </div>
            ))}    
        </div> 
    );
};

export default Student;