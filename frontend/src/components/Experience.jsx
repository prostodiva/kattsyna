import  SectionWrapper from '../hook/SectionWrapper';

const Experience = () => {
    return (
        <div className="section">
            <h1>Experience</h1>
            <p>
                Here is an overview of my work experience in the field of software development and related industries.
            </p>
        </div>
    );
};

export default SectionWrapper(Experience, 'experience');