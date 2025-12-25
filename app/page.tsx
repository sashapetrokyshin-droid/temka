'use client';

import Image from "next/image";
import { useState } from "react";

const navigation = [
  { name: "Про нас", href: "#about" },
  { name: "Товари", href: "#products" },
  { name: "Контакти", href: "#contacts" },
];

const products = [
  {
    id: 1,
    name: "Швейцарські годинники",
    description: "Елітні часи від найкращих європейських виробників",
    image: "🕐",
    price: "від €500",
  },
  {
    id: 2,
    name: "Італійський фешн",
    description: "Модний одяг та аксесуари зі Європи",
    image: "👔",
    price: "від €50",
  },
  {
    id: 3,
    name: "Класичні аксесуари",
    description: "Шкіряні портфелі, ремені та сумки",
    image: "👜",
    price: "від €80",
  },
  {
    id: 4,
    name: "Парфумерія",
    description: "Оригінальні французькі та італійські аромати",
    image: "🧴",
    price: "від €40",
  },
];

const features = [
  {
    title: "Оригіналність",
    description: "100% оригінальні товари від сертифікованих постачальників",
  },
  {
    title: "Швидка доставка",
    description: "Доставка по Україні за 2-3 дні",
  },
  {
    title: "Якість гарантована",
    description: "Гарантія на всі товари та можливість повернення",
  },
  {
    title: "Європейські ціни",
    description: "Найкращі ціни на європейські бренди",
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                ✨ EuroLux
              </div>
            </div>
            
            <div className="hidden md:flex gap-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-300 hover:text-amber-400 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-slate-300 hover:text-amber-400"
            >
              ☰
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden pb-4 flex flex-col gap-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-300 hover:text-amber-400 transition-colors font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Європейська мода та розкіш в<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600"> Україні</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed max-w-lg">
                Ми привозимо найкращі бренди Європи: швейцарські годинники, італійський фешн та стильні аксесуари. Якість, стиль та доступність в одному місці.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-600 text-black font-bold rounded-lg hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-200 transform hover:scale-105">
                  Перейти до каталогу
                </button>
                <button className="px-8 py-4 border-2 border-amber-400 text-amber-400 font-bold rounded-lg hover:bg-amber-400/10 transition-all duration-200">
                  Дізнатись більше
                </button>
              </div>
            </div>
            <div className="relative h-96 sm:h-full flex items-center justify-center">
              <div className="text-8xl animate-bounce">✨</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Чому обирають нас</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-slate-700/40 backdrop-blur border border-slate-600 rounded-xl p-8 hover:border-amber-400/50 transition-all duration-200"
              >
                <h3 className="text-xl font-bold mb-3 text-amber-400">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="relative px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Популярні категорії</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Від елітних швейцарських годинників до стильних італійських аксесуарів
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-xl overflow-hidden border border-slate-600 hover:border-amber-400/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="aspect-square flex items-center justify-center text-6xl bg-slate-800/80 group-hover:bg-gradient-to-br group-hover:from-amber-900/30 group-hover:to-amber-800/30 transition-colors">
                  {product.image}
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <p className="text-slate-400 text-sm">{product.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-600">
                    <span className="text-lg font-bold text-amber-400">{product.price}</span>
                    <button className="bg-amber-400/20 text-amber-400 px-4 py-2 rounded-lg hover:bg-amber-400/30 transition-colors">
                      Детальніше
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative px-4 sm:px-6 lg:px-8 py-20 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-center">Про нас</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-lg text-slate-300 space-y-4">
                <p>
                  Ми спеціалізуємося на імпорті преміум-товарів з Європи. З 2020 року ми задовольняємо потреби українців у якісних, стильних виробах від світових брендів.
                </p>
                <p>
                  Кожен товар у нашому магазині ретельно відібраний та перевірений на оригінальність. Ми працюємо лише з сертифікованими постачальниками з Швейцарії, Італії, Франції та Німеччини.
                </p>
                <p>
                  Наша мета — зробити європейський розкіш доступним для кожного українця за справедливими цінами.
                </p>
              </div>
              <div className="bg-gradient-to-br from-amber-900/30 to-slate-800 rounded-xl p-12 border border-amber-400/20 text-center">
                <div className="text-6xl mb-4">🌍</div>
                <h3 className="text-2xl font-bold mb-2">Глобальна мережа</h3>
                <p className="text-slate-400">Доставляємо з головних магазинів Європи в ваші руки</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="relative px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold">Зв'яжіться з нами</h2>
          <p className="text-xl text-slate-300">Виникли питання? Ми завжди готові допомогти!</p>
          
          <div className="grid md:grid-cols-3 gap-6 my-12">
            <div className="bg-slate-700/40 rounded-xl p-8 border border-slate-600">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-lg font-bold mb-2">Телефон</h3>
              <p className="text-slate-300">+38 (099) XXX-XX-XX</p>
            </div>
            <div className="bg-slate-700/40 rounded-xl p-8 border border-slate-600">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-lg font-bold mb-2">Email</h3>
              <p className="text-slate-300">info@eurolux.ua</p>
            </div>
            <div className="bg-slate-700/40 rounded-xl p-8 border border-slate-600">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-lg font-bold mb-2">Адреса</h3>
              <p className="text-slate-300">Київ, Україна</p>
            </div>
          </div>

          <form className="space-y-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Ваш email"
              className="w-full px-6 py-3 bg-slate-700/40 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-amber-400"
            />
            <textarea
              placeholder="Ваше повідомлення"
              rows={4}
              className="w-full px-6 py-3 bg-slate-700/40 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 resize-none"
            ></textarea>
            <button className="w-full px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-600 text-black font-bold rounded-lg hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-200">
              Надіслати
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 px-4 sm:px-6 lg:px-8 py-12 bg-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-bold mb-4 text-amber-400">EuroLux</h4>
              <p className="text-slate-400 text-sm">Європейська мода та розкіш в Україні</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Навігація</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="hover:text-amber-400 transition-colors">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Соцмережі</h4>
              <div className="flex gap-4 text-slate-400">
                <a href="#" className="hover:text-amber-400 transition-colors">Instagram</a>
                <a href="#" className="hover:text-amber-400 transition-colors">Facebook</a>
                <a href="#" className="hover:text-amber-400 transition-colors">Telegram</a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-slate-400 text-sm">
            <p>&copy; 2024 EuroLux. Всі права захищені.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
