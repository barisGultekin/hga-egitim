import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { ChevronDown } from "lucide-react";

function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

interface NavChild {
  title: string;
  description: string;
  href: string;
}

interface NavItem {
  title: string;
  href: string;
  children?: NavChild[];
}

interface Props {
  items: NavItem[];
  currentPath: string;
}

export default function Nav({ items, currentPath }: Props) {
  return (
    <NavigationMenu.Root className="nav-menu relative z-[10] flex w-max">
      <NavigationMenu.List className="flex list-none items-center space-x-0.5 rounded-lg  px-1 py-1 transition-all duration-300">
        {items.map((item) => (
          <NavigationMenu.Item key={item.title}>
            {item.children ? (
              <>
                <NavigationMenu.Trigger className="nav-trigger group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none">
                  {item.title}
                  <ChevronDown className="nav-chevron ml-1 h-3 w-3 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                </NavigationMenu.Trigger>

                <NavigationMenu.Content className="w-full md:w-[380px]">
                  <ul className="grid gap-1 p-3 md:w-[380px]">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <NavigationMenu.Link asChild>
                          <a
                            href={child.href}
                            className="block select-none rounded-md p-3 no-underline outline-none transition-colors hover:bg-gray-50 focus:bg-gray-50"
                          >
                            <div className="text-sm font-medium text-gray-900">
                              {child.title}
                            </div>
                            <p className="mt-0.5 line-clamp-2 text-sm text-gray-500">
                              {child.description}
                            </p>
                          </a>
                        </NavigationMenu.Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenu.Content>
              </>
            ) : (
              <NavigationMenu.Link asChild>
                <a
                  href={item.href}
                  className={cn(
                    "nav-link inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none",
                    currentPath === item.href && "nav-link-active",
                  )}
                >
                  {item.title}
                </a>
              </NavigationMenu.Link>
            )}
          </NavigationMenu.Item>
        ))}
      </NavigationMenu.List>

      <div className="absolute left-1/2 top-full flex h-[30px] -translate-x-1/2 items-start justify-center">
        <NavigationMenu.Viewport className="relative mt-2 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-top-center overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg transition-[width,height] duration-300 md:w-auto" />
      </div>
    </NavigationMenu.Root>
  );
}
