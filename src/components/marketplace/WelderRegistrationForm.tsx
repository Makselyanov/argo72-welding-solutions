import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { serviceCategories } from "@/data/serviceCategories";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Имя должно содержать минимум 2 символа"),
  surname: z.string().min(2, "Фамилия должна содержать минимум 2 символа"),
  phone: z.string().min(10, "Введите корректный номер телефона"),
  city: z.string().min(2, "Укажите город"),
  specializations: z.array(z.string()).min(1, "Выберите хотя бы одну специализацию"),
  experience: z.number().min(0, "Укажите опыт работы").max(50, "Проверьте корректность данных"),
  description: z.string().min(50, "Расскажите о себе подробнее (минимум 50 символов)"),
  socialLink: z.string().optional(),
});

interface WelderRegistrationFormProps {
  open: boolean;
  onClose: () => void;
}

export const WelderRegistrationForm = ({ open, onClose }: WelderRegistrationFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      surname: "",
      phone: "",
      city: "",
      specializations: [],
      experience: 0,
      description: "",
      socialLink: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      // TODO: Replace with actual API call
      console.log("Welder registration:", {
        ...values,
        type: "welder",
      });

      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами для проверки документов и регистрации в системе",
      });

      form.reset();
      onClose();
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Попробуйте еще раз.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Регистрация сварщика</DialogTitle>
          <DialogDescription>
            Присоединяйтесь к бирже Argo72 и получайте больше заказов
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Имя</FormLabel>
                    <FormControl>
                      <Input placeholder="Иван" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="surname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Фамилия</FormLabel>
                    <FormControl>
                      <Input placeholder="Петров" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Телефон</FormLabel>
                  <FormControl>
                    <Input placeholder="+7 (___) ___-__-__" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Город</FormLabel>
                  <FormControl>
                    <Input placeholder="Тюмень" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="specializations"
              render={() => (
                <FormItem>
                  <FormLabel>Основные специализации</FormLabel>
                  <div className="space-y-2">
                    {serviceCategories.map((cat) => (
                      <FormField
                        key={cat.id}
                        control={form.control}
                        name="specializations"
                        render={({ field }) => (
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(cat.name)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, cat.name])
                                    : field.onChange(
                                        field.value?.filter((value) => value !== cat.name)
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal cursor-pointer">
                              {cat.name}
                            </FormLabel>
                          </FormItem>
                        )}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="experience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Опыт работы (лет)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="5"
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Описание / портфолио</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Расскажите о своем опыте, выполненных проектах, навыках..."
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="socialLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ссылка на соцсети / мессенджер (опционально)</FormLabel>
                  <FormControl>
                    <Input placeholder="https://t.me/username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-3 pt-4">
              <Button type="button" variant="outline" onClick={onClose} className="flex-1">
                Отмена
              </Button>
              <Button type="submit" disabled={isSubmitting} className="flex-1">
                {isSubmitting ? "Отправка..." : "Зарегистрироваться"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
