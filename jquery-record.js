var createPerson = function(name,age){
	//声明一个中间对象，该对象就是工厂模式的模子
	var o = new Object();

	//依次添加我们需要的属性和方法
	o.name = name;
	o.age = age;
	o.getName = function(){
		return this.name;
	} 
	//return o;
}

//将构造函数以参数形式传入
function New(func){
	//声明一个中间对象，该对象为最终返回的实例
	var res = {};
	if(func.prototype !== null){
		//将实例的原型指向构造函数的原型
		res.__proto__ = func.prototype;
	}

	//res为构造函数执行的结果，这里通过apply，将构造函数内部的this指向修改为指向res，即为实例对象
	var ret = func.apply(res, Array.prototype.slice.call(arguments, 1));

	//当我们在构造函数中明确指定了返回对象时，那么new的执行结果就是该返回对象
	if((typeof ret === "Object" || typeof ret === "Function") && ret ！== null){
		return ret;
	}

	//如果没有明确指定返回对象，则默认返回res,这个res就是实例对象
	return res;	
}

//通过new 声明 创建实例，这里的p1,实际接收的是new中返回的res
var p1 = New(createPerson,'tom',20);
/* JavaScript内部再通过其他的一些特殊处理，将var p1 = New(Person, 'tom', 20);等效于var p1 = new Person('tom', 20);。就是我们认识的new关键字了。具体怎么处理的，我也不知道，别刨根问底了，一直回答下去太难 - -！ */
console.log(p1.getName());

//这里也可以判断出实例的类型
console.log(p1 instanceof createPerson); //true





var perTom = createPerson('Tom',20);
var perJike = createPerson('Jike',21);

var obj = {};
var foo = function(){};

console.log(obj instanceof Object); //true
console.log(foo instanceof Function); //true
















