let store = {
    sidebar: {
        photo: "./img/photo.png",
        bgcPhoto: './img/glossy.png',

        contacts: {
            tel: [{
                id: 1,
                phone: '+1 234 5678 90 12',
                phoneHref: 'tel:+123456789012',
                sign: 'C: ',
            }],

            email: [{
                id: 1,
                email: 'abcde_fghgklm@gmail.com',
                emailHref: 'abcde_fghgklm@gmail.com',
                sign: 'E: ',
            }]
        },

        titleContacts: 'Contacts',
        titleTech: 'Tech Skills',
        titleSoft: 'Soft Skills',

        techSkills: [
            {id: 0, skill: 'HTML5'},
            {id: 1, skill: 'CSS3'},
            {id: 2, skill: 'GIT'},
            {id: 3, skill: 'WebPack'},
            {id: 4, skill: 'JavaScript'},
            {id: 5, skill: 'React.js'},
            {id: 6, skill: 'Node.js'}
        ],

        softSkills: [
            {id: 0, skill: 'Scrum'},
            {id: 1, skill: 'Agile'},
            {id: 2, skill: 'GTD'},
            {id: 3, skill: 'Teamwork'}
        ]
    },

    mainContent: {
        position: [{id: 1, position: 'Front-End Developer'}],
        name: [{id: 1, name: 'Anton Zhyvotovskyi'}],
        text: [{
            id: 1, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt' +
                ' ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra' +
                ' maecenas accumsan lacus vel facilisis.'
        }],

        titleProjects: 'Projects',
        titleWork: 'Work Experience',
        titleEducation: 'Education',

        projects: [
            {
                id: 1,
                href: 'https://lorem.ips.um/',
                http: 'https://lorem.ips.um/',
                technologies: 'HTML5, CSS3',
                dots: '...................................................'
            },
            {
                id: 2,
                href: 'https://quis.ips.um/',
                http: 'https://quis.ips.um/',
                technologies: 'JavaScript',
                dots: '......................................................'
            },
            {
                id: 3,
                href: 'https://risus.ips.um/',
                http: 'https://risus.ips.um/',
                technologies: 'React.js, Node.js',
                dots: '.....................................................'
            }
        ],

        workExperience: [
            {
                id: 1,
                position: 'Front-End Developer ',
                company: 'Freelance',
                date: 'September 2019 - up to now ',
                country: 'Country',
                responsibility: [
                    {id: 1, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,'},
                    {id: 2, text: 'Aperiam debitis deleniti esse harum officia omnis optio,'},
                    {id: 3, text: 'Recusandae reprehenderit tenetur voluptas,'},
                    {id: 4, text: 'Atque consequatur cum maxime molestiae quam.'},
                ]
            },
            {
                id: 2,
                position: 'Manager ',
                company: 'HBO LLC',
                date: 'April 2017 - August 2019 ',
                country: 'Country',
                responsibility: [
                    {id: 1, text: 'Aperiam debitis deleniti esse harum officia omnis optio,'},
                    {id: 2, text: 'Atque consequatur cum maxime molestiae quam,'},
                    {id: 3, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
                ]
            },
            {
                id: 3,
                position: 'Manager Assistant ',
                company: 'Paris group LLC',
                date: 'May 2015 - July 2016 ',
                country: 'Country',
                responsibility: [
                    {id: 1, text: 'Recusandae reprehenderit tenetur voluptas,'},
                    {id: 2, text: 'Aperiam debitis deleniti esse harum officia omnis optio,'},
                    {id: 3, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
                    {id: 4, text: 'Atque consequatur cum maxime molestiae quam,'},
                    {id: 5, text: 'Aperiam debitis deleniti esse harum officia omnis optio,'},
                ]
            }
        ],

        education: [{
            id: 1,
            university: 'Risus Commodo National University',
            universityProgram: 'Quis ipsum suspendisse',
            universityDate: 'September 2009 - June 2014 ',
            universityCountry: 'Country'
        }],
    }
}

export default store;
