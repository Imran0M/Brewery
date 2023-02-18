var button=document.querySelector('[type="sumbit"]')
button.addEventListener('click',(e)=>{
    e.preventDefault()
    var search =document.querySelector('[placeholder="search"]')
    search_value=search.value
    var search_data=search_value
    apiData(search_data)
    var search =document.querySelector('[placeholder="search"]')  
})

// var search= search_data;
async function apiData(search_data){
    var api_promise=fetch(`https://api.openbrewerydb.org/breweries/search?query=${search_data}`)
    // console.log(api_data)
    var api_response = await api_promise
    var api_json = api_response.json()
    var api_out = await api_json
    console.log(api_out)
    
   try{
        for(let i of api_out){
            console.log(i)
            //breweries type
            var first_parent=document.createElement('div')
            first_parent.classList.add('styling_class')
            
            var child = document.createElement('p')
            child.classList.add('type')
            child.innerText=i.brewery_type
            // child.innerText = i.brewery_type
            // child.innerText =i.name
            
            first_parent.append(child)
            // breweries name
            var child_name=document.createElement('p')
            child_name.classList.add('name')
            child_name.innerText=i.name
            first_parent.append(child_name)

            //breweries child_website_url
            var child_website_url=document.createElement('p')
            child_website_url.classList.add('link')
            child_website_url.innerText=i.website_url
            first_parent.append(child_website_url)

             // breweries Address
             var child_address=document.createElement('p')
             child_address.innerText=i.address_2
             first_parent.append(child_address)
 
             var child_address1=document.createElement('p')
             child_address1.innerText=i.city
             first_parent.append(child_address1)
 
             var child_address2=document.createElement('p')
             child_address2.innerText=i.country
             first_parent.append(child_address2)
    
            //breweries phone
            var child_phone=document.createElement('p')
            child_phone.classList.add('phone')
            child_phone.innerText=i.phone
            first_parent.append(child_phone)

            var main_parent=document.querySelector('.parent')
            main_parent.append(first_parent)
        }
    }
    catch{
          var error= document.createElement('h2')
          error.innerText='Response Limit reached'
          main_parent.append(error)
    }
    
}
