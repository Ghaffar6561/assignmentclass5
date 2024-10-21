import Link from "next/link"
export default function Navbar(){
    return(
        <header style={{background: "red", color:"blue"}}>
            <nav>
                <ul>
                    <li style={{color:"white"}}>
                        <Link href="/category/crypto">Crypto</Link>
                        
                    </li>
                    <li style={{color:"green"}}>
                        <Link href="/product/product1">Laptop</Link>
                    </li>
                
                </ul>
            </nav>
        </header>
    )
}
