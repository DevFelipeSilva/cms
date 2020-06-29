$("#navbrandID").click((event) => {
    event.preventDefault()

    console.log("click")
    changePage("index")
})

function changePage(endpoint){
	switch(endpoint){
		case 'cases': 
			$.ajax({
				url: process.env.URL+'/'+endpoint,
                type: 'GET',
                contentType: "charset=UTF-8",
				cache: false,
				complete: (response) => $(html).html(response),
				error: () => alert("Ocorreu um erro")
			})
		break

		case 'index':
			$.ajax({
				url: process.env.URL+'/'+endpoint,
				type: 'GET',
				contentType: "charset=UTF-8",
				cache: false,
				complete: (response) => $(html).html(response),
				error: () => alert("Ocorreu um erro")
			})
		break

		case 'contato':
			$.ajax({
				url: process.env.URL+"/"+endpoint,
				type: 'GET',
				contentType: "charset=UTF-8",
				cache: false,
				complete: (response) => $(html).html(response),
				error: () => alert("Ocorreu um erro")
			})
		break

		case 'material': 
			$.ajax({
				url: process.env.URL+"/"+endpoint,
				type: 'GET',
				contentType: "charset=UTF-8",
				cache: false,
				complete: (response) => $(html).html(response),
				error: () => alert("Ocorreu um erro")
			})
        break
        
        case 'noticias': 
			$.ajax({
				url: process.env.URL+"/"+endpoint,
				type: 'GET',
				contentType: "charset=UTF-8",
				cache: false,
				complete: (response) => $(html).html(response),
				error: () => alert("Ocorreu um erro")
			})
        break
        
        case 'presentation': 
			$.ajax({
				url: process.env.URL+"/"+endpoint,
				type: 'GET',
				contentType: "charset=UTF-8",
				cache: false,
				complete: (response) => $(html).html(response),
				error: () => alert("Ocorreu um erro")
			})
        break
        
        case 'servicos': 
			$.ajax({
				url: process.env.URL+"/"+endpoint,
				type: 'GET',
				contentType: "charset=UTF-8",
				cache: false,
				complete: (response) => $(html).html(response),
				error: () => alert("Ocorreu um erro")
			})
        break

        case 'sobre': 
			$.ajax({
				url: process.env.URL+"/"+endpoint,
				type: 'GET',
				contentType: "charset=UTF-8",
				cache: false,
				complete: (response) => $(html).html(response),
				error: () => alert("Ocorreu um erro")
			})
        break

        case 'template': 
			$.ajax({
				url: process.env.URL+"/"+endpoint,
				type: 'GET',
				contentType: "charset=UTF-8",
				cache: false,
				complete: (response) => $(html).html(response),
				error: () => alert("Ocorreu um erro")
			})
        break

		default:
			alert("Ocorreu um erro")
	};
}