"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerPortal,
} from "@/components/ui/drawer";
import { useContactConfirmationDrawer } from "@/context/contact-drawer-context";

export function ConfirmationDrawer() {
  const { isOpen, handleOpen } = useContactConfirmationDrawer();

  return (
    <Drawer open={isOpen} onOpenChange={handleOpen}>
      <DrawerPortal>
        <DrawerContent>
          <div className="mx-auto w-full max-w-lg">
            <DrawerHeader>
              <DrawerTitle>Informações enviada com sucesso!</DrawerTitle>
              <DrawerDescription>
                Recebemos as suas informações, vamos entrar em contacto em
                breve.
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="outline">OK</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  );
}
