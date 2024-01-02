import { motion } from 'framer-motion';

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    staggerChildren: 0.05,
    staggerDirection: -1,
  },
};

const itemsVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0
}
};

const Links = () => {
  const items = [
    { name: 'Homepage', href: '/', id: 1 },
    { name: 'Services', href: '/services', id: 2 },
    { name: 'Portfolio', href: '/portfilio', id: 3 },
    { name: 'Contact', href: '/contact', id: 4 },
    { name: 'About', href: '/about', id: 5 },
  ];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a href={`#${item}`} key={item.id} variants={itemsVariants} whileHover={{scale:1.1}} whileTap={{scale:0.95}}>
          {item.name}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;