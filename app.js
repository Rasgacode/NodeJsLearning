const System = require('./system')

const start = async () => {
	const system = System({ name: 'whatever' })
	await system.start()
}

start()