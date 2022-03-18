import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from './Components/Home'
import { Signup } from './Components/Signup'
import { Login } from './Components/Login'
import { Notfound } from './Components/Notfound'
import { AddProducts } from './Components/AddProducts'
import { Cart } from './Components/Cart'
import { Cards } from './Components/Cards'
import scrollreveal from 'scrollreveal'
import { AuthProvider } from "./Context/AuthContext"



export const App = () => {

  useEffect(() => {

    const srleft = scrollreveal({
      origin: "left",
      distance: "800px",
      duration: 4000,
      reset: true,
    });
    srleft.reveal(
      `
      #product,
      `,
      {
        opacity: 0,
        inverval: 300,
      }
    );

    const srbottom = scrollreveal({
      origin: "bottom",
      distance: "800px",
      duration: 2000,
      reset: true,
    });
    srbottom.reveal(
      `
      #filtered-product
      `,
      {
        opacity: 0,
        inverval: 300,
      }
    );

    const srtop = scrollreveal({
      origin: "top",
      distance: "100px",
      duration: 1000,
      reset: true,
    });
    srtop.reveal(
      `#navbar
      
      `,
      {
        opacity: 0,
        inverval: 300,
      }
    );


    const sreveal = scrollreveal({
      delay: 500
    });
    sreveal.reveal(
      `#carrousel, #cards, #filter, #filtered, .my-products
      `,
    );
  }, []);
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/categories" component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/add-products" component={AddProducts} />
          <Route path="/cart" component={Cart} />
          <Route path="/cards" component={Cards} />
          <Route component={Notfound} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  )
}
export default App