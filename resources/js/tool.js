Nova.booting((Vue, router) => {
    router.addRoutes([
        {
            name: 'admin-feedback',
            path: '/feedbacks',
            component: require('./views/Index').default,
        },
        {
            name: 'feedback-detail',
            path: '/feedback/:feedbackId',
            component: require('./views/Detail').default,
            props: true,
        },
    ])
})
