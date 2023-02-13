import git from './public/github.svg';
import go from './public/go.svg'
import node from './public/nodedotjs.svg';
import mongo from './public/mongodb.svg';
import bash from './public/gnubash.svg';
import post from './public/postgresql.svg';

import boot from './public/bootstrap.svg'
import html from './public/html5.svg';
import css from './public/css3.svg';
import js from './public/js.svg';
import react from './public/react.svg';
import redux from './public/redux.svg';
import sass from './public/sass.svg';

import './tech-style.css'
// FCDC00
const frontend = [

    {
        id: 1,
        img: html,
        styles: {
            // background: '#E44D27',
            background: 'linear-gradient(to right, #de7459, #e44d27)',
            borderTopRightRadius: '15px',
            borderTopLeftRadius: "15px",
            borderBottomRightRadius: '15px',
            borderBottomLeftRadius: '15px',
        }

    },
    {
        id: 2,
        img: css,
        styles: {
            // background: '#0365B7',
            background: 'linear-gradient(to right, #589edb, #0564b7)',
            borderTopRightRadius: '15px',
            borderTopLeftRadius: "15px",
            borderBottomRightRadius: '15px',
            borderBottomLeftRadius: '15px',
        }

    },
    {
        id: 3,
        img: sass,
        styles: {
            // background: '#75AE63',
            background: 'linear-gradient(to right, #e9afcc, #a34f79)',
            borderTopRightRadius: '15px',
            borderTopLeftRadius: "15px",
            borderBottomRightRadius: '15px',
            borderBottomLeftRadius: '15px',
        }

    },
    {
        id: 4,
        img: boot,
        styles: {
            // background: '#7911F6',
            background: 'linear-gradient(to right, #a05eee, #7911f5)',
            borderTopRightRadius: '15px',
            borderTopLeftRadius: "15px",
            borderBottomRightRadius: '15px',
            borderBottomLeftRadius: '15px',
        }
    },
    {
        id: 5,
        img: js,
        styles: {
            // background: '#75AE63',
            background: 'linear-gradient(to right, #ffef81, #c6b645)',
            borderTopRightRadius: '15px',
            borderTopLeftRadius: "15px",
            borderBottomRightRadius: '15px',
            borderBottomLeftRadius: '15px',
        }

    },
    {
        id: 6,
        img: react,
        styles: {
            // background: '#75AE63',
            background: 'linear-gradient(to right, #a8e7f7, #469bb1)',
            borderTopRightRadius: '15px',
            borderTopLeftRadius: "15px",
            borderBottomRightRadius: '15px',
            borderBottomLeftRadius: '15px',
        }

    },
    {
        id: 7,
        img: redux,
        styles: {
            // background: '#7911F6',
            background: 'linear-gradient(to right, #a05eee, #7911f5)',
            borderTopRightRadius: '15px',
            borderTopLeftRadius: "15px",
            borderBottomRightRadius: '15px',
            borderBottomLeftRadius: '15px',
        }
    }



]
// 'linear-gradient(to right, #a05eee, #7911f5)'
const backend = [
    {
        id: 1,
        img: git,
        styles: {
            // background: '#79D4FD',
            background: 'linear-gradient(to right, #ffef81, #c6b645)',
            borderTopRightRadius: '15px',
            borderTopLeftRadius: "15px",
            borderBottomRightRadius: '15px',
            borderBottomLeftRadius: '15px',
        }
    },
    {
        id: 2,
        img: go,
        styles: {
            // background: '#79D4FD',
            background: 'linear-gradient(to right, #a8e7f7, #469bb1)',
            borderTopRightRadius: '15px',
            borderTopLeftRadius: "15px",
            borderBottomRightRadius: '15px',
            borderBottomLeftRadius: '15px',
        }
    },
    {
        id: 3,
        img: node,
        styles: {
            // background: '#75AE63',
            background: 'linear-gradient(to right, #a6e291, #659356)',
            borderTopRightRadius: '15px',
            borderTopLeftRadius: "15px",
            borderBottomRightRadius: '15px',
            borderBottomLeftRadius: '15px',
        }

    },
    {
        id: 4,
        img: bash,
        styles: {
            // background: '#7911F6',
            background: 'linear-gradient(to right, #589edb, #0564b7)',
            borderTopRightRadius: '15px',
            borderTopLeftRadius: "15px",
            borderBottomRightRadius: '15px',
            borderBottomLeftRadius: '15px',
        }
    },
    {
        id: 5,
        img: mongo,
        styles: {
            // background: '#7911F6',
            background: 'linear-gradient(to right, #a6e291, #659356)',
            borderTopRightRadius: '15px',
            borderTopLeftRadius: "15px",
            borderBottomRightRadius: '15px',
            borderBottomLeftRadius: '15px',
        }
    },
    {
        id: 6,
        img: post,
        styles: {
            // background: '#7911F6',
            background: 'linear-gradient(to right, #a05eee, #7911f5)',
            borderTopRightRadius: '15px',
            borderTopLeftRadius: "15px",
            borderBottomRightRadius: '15px',
            borderBottomLeftRadius: '15px',
        }
    },



]


const techStack = (data) => {
    const imagesCard = data.map(i => {
        return (
            <div className="p-1 col col-sm col-md" key={i.id}>
                <img className='p-2 img-flex box' src={i.img} style={i.styles} alt="html" />
            </div>
        )
    })

    return imagesCard
}


// techonologies carousel
const Technologies = ({ childrenBtn }) => {

    const frontEnd = techStack(frontend)
    const backEnd = techStack(backend)
    return (
        <div className='mt-4'>
            <div className='col mt-5'>
                <div className='container'>

                    <div className="alert alert-box" role="alert">
                        <h1 className='text-lg text-center'>Full Stack Technologies</h1>
                        <hr></hr>
                        <h2 className='text-md'>Learn, Build, Create and Share</h2>
                        <ul className="list-unstyled  text-sm">
                            <li>We have the best tutorials for you. Learn on your own with not confusing explanation.</li>
                            <li>You are not alone our binary stack comunity is here to help you.</li>
                        </ul>
                        {childrenBtn}
                    </div>
                </div>
            </div>
            <div className="learn-skills carousel slide " data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="text-center p-4 row" >
                            {frontEnd}
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="text-center p-4 row">
                            {backEnd}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technologies;