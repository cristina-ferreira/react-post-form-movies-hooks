import React, { useState } from 'react';

const FormFilm = (props) => {
    const [name, setName] = useState('');
    const [poster, setPoster] = useState('');
    const [comment, setComment] = useState('');

    const onSubmitForm = (e) => {
        e.preventDefault();
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                poster,
                comment
            }),
        };

        const url = "http://campus-bordeaux.ovh:3001/api/quests/movies/";
        fetch(url, config)
            .then(res => res.json())
            .then((res) => {
                if (res.error) {
                    alert(res.error);
                } else {
                    alert(`Added film with the ID ${res}!`);
                }
            })
            .catch((e) => {
                console.error(e);
                alert('Error during l\'an film addition');
            });
    };


    return (
        <div className="MovieForm">
            <h1> Film entry: </h1>
            <form onSubmit={onSubmitForm}>
                <fieldset>
                    <legend>Information</legend>
                    <div className="form-data">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-data">
                        <label htmlFor="url">Url</label>
                        <input
                            type="text"
                            id="url"
                            name="url"
                            value={poster}
                            onChange={e => setPoster(e.target.value)}
                        />
                    </div>
                    <div className="form-data">
                        <label htmlFor="email">Comment</label>
                        <input
                            type="textarea"
                            id="comment"
                            name="comment"
                            value={comment}
                            onChange={e => setComment(e.target.value)}
                        />
                    </div>
                    <div className="form-data">
                        <input type="submit" value="Submit" />
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default FormFilm;
