"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import { ArrowUpRight, Menu, X } from "lucide-react";
const links = [{ href: "#sobre", label: "O lugar" }, { href: "#experiencia", label: "Experiência" }, { href: "#galeria", label: "Galeria" }, { href: "#contato", label: "Contato" }];
export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="header"><div className="container header-inner"><a className="brand" href="#inicio" aria-label="Chácaras Beira da Mata, início"><Image src={logo} alt="" width={96} height={98} className="brand-logo" priority /></a><nav className={open ? "nav nav-open" : "nav"} aria-label="Navegação principal">{links.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}<a className="mobile-book" href="#contato" onClick={() => setOpen(false)}>Entrar em contato <ArrowUpRight size={16}/></a></nav><a className="button button-dark header-cta" href="#contato">Entrar em contato <ArrowUpRight size={16}/></a><button className="menu-toggle" type="button" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button></div></header>;
}
