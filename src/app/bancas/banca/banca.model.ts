
// criando um representação de um dado ou uma interface
// não é obrigado a criar essa interface mas assim o código fica mais claro

export interface Banca {
	id_name: string
	name: string
	category: string
	deliveryEstimate: string
	rating: number
	imagePath: string
	about: string
	hours: string
}
