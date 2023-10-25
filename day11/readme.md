> > Destructuring and spread
> > Destructuring is a way to unpack arrays, and objects and assigning to a distinct variable

> > Destructuring arrays

> > Destructuring during iteration
> > const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]

for (const [country, city] of countries) {
console.log(country, city)
}

> > Destructuring object

> > Renaming during structuring

> > Object parameter without destructuring
> > // Without destructuring
> > const rect = {
> > width: 20,
> > height: 10
> > }
> > const calculatePerimeter = rectangle => {
> > return 2 \* (rectangle.width + rectangle.height)
> > }

console.log(calculatePerimeter(rect)) // 60

> > Destructuring object during iteration
> > const todoList = [
> > {
> > task:'Prepare JS Test',
> > time:'4/1/2020 8:30',
> > completed:true
> > },
> > {
> > task:'Give JS Test',
> > time:'4/1/2020 10:00',
> > completed:false
> > },
> > {
> > task:'Assess Test Result',
> > time:'4/1/2020 1:00',
> > completed:false
> > }
> > ]

for (const {task, time, completed} of todoList){
console.log(task, time, completed)
}

> > Spread or rest operator
