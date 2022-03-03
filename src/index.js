import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprobalCard from './ApprobalCard';
import faker from 'faker';

const App = () => {
    return (
        <div className='ui container comments'>
            <ApprobalCard>
                {/*
                <CommentDetail 
                author="Sam" 
                image={faker.image.image()} 
                date="Today at 2:00" 
                text="Meal with the jhonsons" />*/}
                <div>
                    <h4>Go for it!</h4>
                    Excelence is always achived with consistency
                </div>
            </ApprobalCard>
            <ApprobalCard>
                <CommentDetail 
                author="Sam" 
                image={faker.image.image()} 
                date="Today at 2:00" 
                text="Meal with the jhonsons" />            
            </ApprobalCard>
            
            <ApprobalCard>
                <CommentDetail 
                author="Alex" image={faker.image.image()}
                date="Tomorrow at 7:00AM"
                text="Breakfast at Dennys" />            
            </ApprobalCard>
            
            <ApprobalCard>
                <CommentDetail
                author="Clarisse"
                image={faker.image.image()}
                date="Friday 22nd at 10:00PM"
                text="Matrix Resurections" />            
            </ApprobalCard>
            
            <ApprobalCard>
                <CommentDetail
                author="Jane"
                image={faker.image.image()}
                date="Friday 22nd at 10:00PM"
                text={faker.lorem.sentence(4,2)} />            
            </ApprobalCard>

            <ApprobalCard>
                <CommentDetail
                author="Josh"
                image={faker.image.image()}
                date="Friday 30th at 8:00PM"
                text={faker.lorem.sentence(4,2)} />            
            </ApprobalCard>

        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
