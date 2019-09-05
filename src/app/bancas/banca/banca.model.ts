// criando um representação de um dado ou uma interface
// não é obrigado a criar essa interface mas assim o código fica mais claro

export interface Banca {
	id: string
	name: string
	category: string
	deliveryEstimate: string
	rating: number
	imagePath: string
}
