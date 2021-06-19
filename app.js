
 
const  handleSearchMeal =()=>{
     const searchInput = document.getElementById('search').value;
       handleGetMeal(searchInput) 
     document.getElementById('search').value = ""; 
     document.getElementById('food-content').innerHTML ='';
    
  
}

 function handleGetMeal(searchMeal){
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchMeal}`)
    .then(res =>res.json())
    .then(data =>  showDisplayMeal(data.meals))
    .catch(error => alert('Meal is not found try again with other keyword !!'))

  } 
    const showDisplayMeal = (meals)=>{ 
      console.log(meals)
      meals.forEach(meal =>{
        const foodDiv =  document.getElementById('food-content');  
          foodDiv.innerHTML += ` 
          <div class='col-md-3'>
            <div class = 'food' onclick ="handleDisplayDetail('${meal.idMeal}')"> 
              <img src='${meal.strMealThumb}'>
              <h5>${meal.strMeal}</h5>
            </div> 
          </div> 
        `  
      })  
    }

    const handleDisplayDetail = (id) =>{ 
      const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      fetch(url)
      .then(res => res.json())
      .then(data => showDisplayDetail(data.meals[0]))  
    }

    const showDisplayDetail = (data)=>{
      console.log(data)
      const foodDetail = document.getElementById('food-detail');
      foodDetail.innerHTML = `
        <img src='${data.strMealThumb}'></img>
        <h4>${data.strMeal}</h4>
        <h5>Ingredients</h5> 
        <div class='food-info'>
          <p>${data.strIngredient1}  ${data.strMeasure1}</p>
          <p>${data.strIngredient2}  ${data.strMeasure2}</p>
          <p>${data.strIngredient3}  ${data.strMeasure3}</p>
          <p>${data.strIngredient4}  ${data.strMeasure4}</p>
          <p>${data.strIngredient5}  ${data.strMeasure5}</p>
         </div>
      `
    }

   