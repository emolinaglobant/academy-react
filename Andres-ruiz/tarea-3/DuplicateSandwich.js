function solve(s){
    let cantidad=[0, 0, 0, 0];
    let minus=0, mayus=0, num=0, esp=0;
      s="Codewars@codewars123.com"
        for (let i=0; i <= s.length; i++){
            if (i === i.toUpperCase()){
                mayus= mayus + 1
                cantidad=[1] = mayus; 
            }else if(i === i.toLogerCase()){
                minus = minus +1
                cantidad=[2] = minus;
            }else if(i = i.match(/1/2/3/4/5/6/7/8/9) ){
                num = num + 1
                cantidad=[3] = num;
            }else{
                esp = esp + 1
                cantidad=[0] = esp;
            }   
        }
       
        console.log(cantidad)
   }

describe("Basic tests", function(){
    Test.assertDeepEquals(solve("Codewars@codewars123.com"),[1,18,3,2]);
    Test.assertDeepEquals(solve("bgA5<1d-tOwUZTS8yQ"),[7,6,3,2]);
    Test.assertDeepEquals(solve("P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H"),[9,9,6,9]);
    Test.assertDeepEquals(solve("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD"),[15,8,6,9]);
    Test.assertDeepEquals(solve("$Cnl)Sr<7bBW-&qLHI!mY41ODe"), [10,7,3,6])
    Test.assertDeepEquals(solve("@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft"), [7,13,4,10]);
    });