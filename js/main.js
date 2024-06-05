function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(usuario){

}

function main(){
    let maxVerstappen = fazGet("https://api.openf1.org/v1/drivers?last_name=Verstappen&session_key=latest")
    max = JSON.parse(maxVerstappen)
    console.log(max)
}

main()