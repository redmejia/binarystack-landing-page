import Card from '../Card/Card';
import escala from './escala.svg';
import frontend from './front-end.svg';
import backend from './back-end.svg';
import create from './create.svg';

const options = [
    {
        id : 1,
        image: escala,
        title: "Basics Let's Go",
        body: "It is time to buil you skills. Learn basic programing and full stack consepts",
        styles: {
            backgroundColor: '#F3F4F6',
            heigth: '100%',
            borderTopStyle: 'solid',
            borderTopWidth: 'medium',
            borderTopRightRadius: '15px',
            borderTopLeftRadius: "15px",
            borderTopColor: '#6BAD69',
        },
    },
    {
        id : 2,
        image: frontend,
        title: "Front end",
        body: "Start by creating you will learn by doing. You will learn front end technologies",
        styles: {
            backgroundColor: '#F3F4F6',
            height: '100%',
            borderTopStyle: 'solid',
            borderTopWidth: 'medium',
            borderTopRightRadius: '15px',
            borderTopLeftRadius: "15px",
            borderTopColor: '#E9C819',
        }
    },
    {
        id : 3,
        image: backend,
        title: "Back end",
        body: "Build all logic need for your front end. Conect front end and back end",
        styles: {
            backgroundColor: '#F3F4F6',
            height: '100%',
            borderTopStyle: 'solid',
            borderTopWidth: 'medium',
            borderTopRightRadius: '15px',
            borderTopLeftRadius: "15px",
            borderTopColor: '#3675D4',
        }
    },
    {
        id : 4,
        image: create,
        title: "Create",
        body: "Now it is time for you, You will show to the wold what you have learn and build",
        styles: {
            backgroundColor: '#F3F4F6',
            height: '100%',
            borderTopStyle: 'solid',
            borderTopWidth: 'medium',
            borderTopRightRadius: '15px',
            borderTopLeftRadius: "15px",
            borderTopColor: '#ED2222',
        }

    }
]

const RenderOptionsCard = () => {

    const option = options.map(opt => (
        <div className='col col-md-4 col-lg-4 col-xl-3 my-2' key={opt.id}>
            <Card
                image={<img className="text-center" src={opt.image} alt="options" />}
                title={<h5 className="card-title text-center">{opt.title}</h5>}
                body={<p className="card-text">{opt.body}</p>}
                styles={opt.styles}
            />
        </div>
    ))

    return (
        <div className='row'>
            {option}
        </div>
    )

}

export default RenderOptionsCard;