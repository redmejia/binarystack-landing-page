import Cards from '../Cards/Cards';
import escala from './escala.svg';
import frontend from './front-end.svg';
import backend from './back-end.svg';
import create from './create.svg';

const options = [
    {
        image: escala,
        title: "Basics Let's Go",
        body: "It is time to buil you skills. Learn basic programing and full stack consepts",
        styles: {
            borderTopStyle: 'solid',
            borderTopWidth: 'medium',
            borderTopRightRadius: '15px',
            borderTopLeftRadius: "15px",
            borderTopColor: '#6BAD69',
        },
    },
    {
        image: frontend,
        title: "Front end",
        body: "Start by creating you will learn by doing. You will learn front end technologies",
        styles: {
            borderTopStyle: 'solid',
            borderTopWidth: 'medium',
            borderTopRightRadius: '15px',
            borderTopLeftRadius: "15px",
            borderTopColor: '#E9C819',
        }
    },
    {
        image: backend,
        title: "Back end",
        body: "Build all logic need for your front end. Conect front end and back end",
        styles: {
            borderTopStyle: 'solid',
            borderTopWidth: 'medium',
            borderTopRightRadius: '15px',
            borderTopLeftRadius: "15px",
            borderTopColor: '#3675D4',
        }
    },
    {
        image: create,
        title: "Create",
        body: "Now it is time for you, You will show to the wold what you have learn and build",
        styles: {
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
        <div className='col col-md-4 col-lg-4 col-xl-3 my-2'>
            <Cards
                image={opt.image}
                title={opt.title}
                body={opt.body}
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