import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: 'Здравствуйте! Чем могу помочь?', isUser: false }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: ''
  });

  const services = [
    {
      title: 'Классический массаж',
      description: 'Традиционный расслабляющий массаж всего тела',
      price: '3 000 ₽',
      duration: '60 минут',
      icon: 'Heart'
    },
    {
      title: 'Тайский массаж',
      description: 'Древняя техника с элементами растяжки',
      price: '4 500 ₽',
      duration: '90 минут',
      icon: 'Flower2'
    },
    {
      title: 'Спортивный массаж',
      description: 'Глубокая проработка мышц для спортсменов',
      price: '3 500 ₽',
      duration: '60 минут',
      icon: 'Dumbbell'
    },
    {
      title: 'Антицеллюлитный массаж',
      description: 'Коррекция фигуры и улучшение тонуса кожи',
      price: '4 000 ₽',
      duration: '75 минут',
      icon: 'Sparkles'
    },
    {
      title: 'Массаж лица',
      description: 'Омолаживающие техники для лица и шеи',
      price: '2 500 ₽',
      duration: '45 минут',
      icon: 'Star'
    },
    {
      title: 'Массаж стоп',
      description: 'Рефлексотерапия и релаксация',
      price: '2 000 ₽',
      duration: '40 минут',
      icon: 'Footprints'
    }
  ];

  const reviews = [
    {
      name: 'Анна Петрова',
      text: 'Потрясающий массаж! Ушло всё напряжение, чувствую себя как заново родившейся',
      rating: 5
    },
    {
      name: 'Дмитрий Соколов',
      text: 'Профессиональные мастера, приятная атмосфера. Рекомендую!',
      rating: 5
    },
    {
      name: 'Елена Иванова',
      text: 'Хожу сюда регулярно. Отличное качество услуг и адекватные цены',
      rating: 5
    }
  ];

  const promos = [
    {
      title: 'Первое посещение -20%',
      description: 'Специальная скидка для новых клиентов на любую услугу',
      discount: '-20%'
    },
    {
      title: 'Абонемент на 5 сеансов',
      description: 'Купите 5 сеансов и получите скидку 15%',
      discount: '-15%'
    }
  ];

  const handleSendMessage = () => {
    if (!chatInput.trim()) return;
    
    setMessages([...messages, { text: chatInput, isUser: true }]);
    setChatInput('');
    
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: 'Спасибо за сообщение! Наш специалист свяжется с вами в ближайшее время.', 
        isUser: false 
      }]);
    }, 1000);
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: 'Заявка принята!',
      description: 'Мы свяжемся с вами для подтверждения записи',
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/20">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold font-heading text-primary">Релакс Спа</h1>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('prices')} className="hover:text-primary transition-colors">Цены</button>
              <button onClick={() => scrollToSection('reviews')} className="hover:text-primary transition-colors">Отзывы</button>
              <button onClick={() => scrollToSection('promos')} className="hover:text-primary transition-colors">Акции</button>
              <button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors">Контакты</button>
            </div>
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="outline" size="icon">
                  <Icon name="Menu" size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Меню</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-6">
                  <button onClick={() => scrollToSection('home')} className="text-left hover:text-primary transition-colors">Главная</button>
                  <button onClick={() => scrollToSection('services')} className="text-left hover:text-primary transition-colors">Услуги</button>
                  <button onClick={() => scrollToSection('prices')} className="text-left hover:text-primary transition-colors">Цены</button>
                  <button onClick={() => scrollToSection('reviews')} className="text-left hover:text-primary transition-colors">Отзывы</button>
                  <button onClick={() => scrollToSection('promos')} className="text-left hover:text-primary transition-colors">Акции</button>
                  <button onClick={() => scrollToSection('contacts')} className="text-left hover:text-primary transition-colors">Контакты</button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-secondary">Профессиональный массаж</Badge>
              <h2 className="text-5xl md:text-6xl font-bold font-heading mb-6 leading-tight">
                Массаж для вашего <span className="text-primary">здоровья</span> и красоты
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Расслабьтесь и восстановите силы с помощью наших профессиональных массажных техник
              </p>
              <div className="flex gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg" className="bg-primary hover:bg-primary/90">
                      <Icon name="Calendar" className="mr-2" size={20} />
                      Записаться онлайн
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle>Онлайн-запись</DialogTitle>
                      <DialogDescription>Заполните форму для записи на сеанс</DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleBooking} className="space-y-4">
                      <div>
                        <Label htmlFor="name">Имя</Label>
                        <Input
                          id="name"
                          value={bookingForm.name}
                          onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Телефон</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={bookingForm.phone}
                          onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={bookingForm.email}
                          onChange={(e) => setBookingForm({...bookingForm, email: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="service">Услуга</Label>
                        <Select onValueChange={(value) => setBookingForm({...bookingForm, service: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите услугу" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service, idx) => (
                              <SelectItem key={idx} value={service.title}>{service.title}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="date">Дата</Label>
                        <Input
                          id="date"
                          type="date"
                          value={bookingForm.date}
                          onChange={(e) => setBookingForm({...bookingForm, date: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="time">Время</Label>
                        <Input
                          id="time"
                          type="time"
                          value={bookingForm.time}
                          onChange={(e) => setBookingForm({...bookingForm, time: e.target.value})}
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90">
                        Оплатить и записаться
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('services')}>
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/c191acac-e892-4ff2-a4ff-879a5465af19/files/3829a7f7-5d20-425c-8bb5-42862357f227.jpg"
                alt="Массажный салон"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm">довольных клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Наши услуги</Badge>
            <h2 className="text-4xl font-bold font-heading mb-4">Выберите свой массаж</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Широкий спектр массажных техник для вашего здоровья и релаксации
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="font-heading">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">{service.price}</div>
                      <div className="text-sm text-muted-foreground">{service.duration}</div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full">Записаться</Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle>Онлайн-запись</DialogTitle>
                        <DialogDescription>Заполните форму для записи на сеанс</DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleBooking} className="space-y-4">
                        <div>
                          <Label htmlFor="name">Имя</Label>
                          <Input
                            id="name"
                            value={bookingForm.name}
                            onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Телефон</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={bookingForm.phone}
                            onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            value={bookingForm.email}
                            onChange={(e) => setBookingForm({...bookingForm, email: e.target.value})}
                            required
                          />
                        </div>
                        <div>
                          <Label>Услуга</Label>
                          <Input value={service.title} disabled />
                        </div>
                        <div>
                          <Label htmlFor="date">Дата</Label>
                          <Input
                            id="date"
                            type="date"
                            value={bookingForm.date}
                            onChange={(e) => setBookingForm({...bookingForm, date: e.target.value})}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="time">Время</Label>
                          <Input
                            id="time"
                            type="time"
                            value={bookingForm.time}
                            onChange={(e) => setBookingForm({...bookingForm, time: e.target.value})}
                            required
                          />
                        </div>
                        <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90">
                          Оплатить и записаться
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Прайс-лист</Badge>
            <h2 className="text-4xl font-bold font-heading mb-4">Наши цены</h2>
          </div>
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-8">
              <div className="space-y-4">
                {services.map((service, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-center py-4">
                      <div>
                        <div className="font-semibold">{service.title}</div>
                        <div className="text-sm text-muted-foreground">{service.duration}</div>
                      </div>
                      <div className="text-xl font-bold text-primary">{service.price}</div>
                    </div>
                    {idx < services.length - 1 && <Separator />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="promos" className="py-20 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary">Специальные предложения</Badge>
            <h2 className="text-4xl font-bold font-heading mb-4">Акции месяца</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {promos.map((promo, idx) => (
              <Card key={idx} className="relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-bold">
                  {promo.discount}
                </div>
                <CardHeader>
                  <CardTitle className="font-heading">{promo.title}</CardTitle>
                  <CardDescription className="text-base">{promo.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full">Воспользоваться</Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle>Онлайн-запись</DialogTitle>
                        <DialogDescription>Заполните форму для записи на сеанс</DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleBooking} className="space-y-4">
                        <div>
                          <Label htmlFor="name">Имя</Label>
                          <Input
                            id="name"
                            value={bookingForm.name}
                            onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Телефон</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={bookingForm.phone}
                            onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            value={bookingForm.email}
                            onChange={(e) => setBookingForm({...bookingForm, email: e.target.value})}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="service">Услуга</Label>
                          <Select onValueChange={(value) => setBookingForm({...bookingForm, service: value})}>
                            <SelectTrigger>
                              <SelectValue placeholder="Выберите услугу" />
                            </SelectTrigger>
                            <SelectContent>
                              {services.map((service, idx) => (
                                <SelectItem key={idx} value={service.title}>{service.title}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="date">Дата</Label>
                          <Input
                            id="date"
                            type="date"
                            value={bookingForm.date}
                            onChange={(e) => setBookingForm({...bookingForm, date: e.target.value})}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="time">Время</Label>
                          <Input
                            id="time"
                            type="time"
                            value={bookingForm.time}
                            onChange={(e) => setBookingForm({...bookingForm, time: e.target.value})}
                            required
                          />
                        </div>
                        <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90">
                          Оплатить и записаться
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Отзывы</Badge>
            <h2 className="text-4xl font-bold font-heading mb-4">Что говорят наши клиенты</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {reviews.map((review, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={16} />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Контакты</Badge>
            <h2 className="text-4xl font-bold font-heading mb-4">Свяжитесь с нами</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <img
                src="https://cdn.poehali.dev/projects/c191acac-e892-4ff2-a4ff-879a5465af19/files/21bfe6a7-1910-441e-b516-df83e134c22c.jpg"
                alt="Салон"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" className="text-primary mt-1" size={24} />
                    <div>
                      <div className="font-semibold mb-1">Адрес</div>
                      <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 123</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start gap-4">
                    <Icon name="Phone" className="text-primary mt-1" size={24} />
                    <div>
                      <div className="font-semibold mb-1">Телефон</div>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start gap-4">
                    <Icon name="Mail" className="text-primary mt-1" size={24} />
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <p className="text-muted-foreground">info@relaxspa.ru</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start gap-4">
                    <Icon name="Clock" className="text-primary mt-1" size={24} />
                    <div>
                      <div className="font-semibold mb-1">Режим работы</div>
                      <p className="text-muted-foreground">Пн-Вс: 9:00 - 21:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-card py-8 px-4 border-t">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Релакс Спа. Все права защищены.</p>
        </div>
      </footer>

      <Sheet open={chatOpen} onOpenChange={setChatOpen}>
        <SheetTrigger asChild>
          <Button
            size="lg"
            className="fixed bottom-6 right-6 rounded-full w-16 h-16 shadow-2xl bg-secondary hover:bg-secondary/90 animate-scale-in"
          >
            <Icon name="MessageCircle" size={28} />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-full sm:max-w-md">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-2">
              <Icon name="MessageCircle" className="text-primary" size={24} />
              Онлайн-чат
            </SheetTitle>
            <SheetDescription>Задайте нам любой вопрос</SheetDescription>
          </SheetHeader>
          <div className="flex flex-col h-[calc(100vh-180px)] mt-6">
            <div className="flex-1 overflow-y-auto space-y-4 mb-4">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      msg.isUser
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-foreground'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                placeholder="Напишите сообщение..."
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <Button onClick={handleSendMessage} className="bg-secondary hover:bg-secondary/90">
                <Icon name="Send" size={20} />
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Index;
