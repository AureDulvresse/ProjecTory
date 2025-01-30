"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  BarChart2,
  Users,
  Calendar,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";
import { UserButton, useUser, SignInButton, SignUpButton } from "@clerk/nextjs";

// Animations variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

const slideIn = {
  hidden: { x: -60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

export default function LandingPage() {
  const router = useRouter();
  const { user, isLoaded } = useUser();

  return (
    <div className="min-h-screen bg-background">
      <motion.nav
        className="border-b"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <span className="text-2xl font-bold text-primary">ProjecTory</span>
          </motion.div>
          <div className="flex items-center gap-4">
            {isLoaded && (
              <>
                {user ? (
                  <>
                    <motion.div whileHover={{ scale: 1.05 }}>
                      <Button
                        variant="ghost"
                        onClick={() => router.push("/dashboard")}
                      >
                        Mon espace de gestion
                      </Button>
                    </motion.div>
                    <UserButton />
                  </>
                ) : (
                  <>
                    <motion.div whileHover={{ scale: 1.05 }}>
                      <Button variant="ghost" onClick={() => router.push("/sign-in")}>Se connecter</Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }}>
                      <Button onClick={() => router.push("/sign-up")}>S'inscrire</Button>
                    </motion.div>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section - Stagger children */}
      <motion.section
        className="px-4 py-20 text-center sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="mx-auto max-w-4xl">
          <motion.div variants={fadeIn}>
            <Badge className="mb-4" variant="secondary">
              Nouveau ✨ Intelligence artificielle intégrée
            </Badge>
          </motion.div>
          <motion.h1
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            variants={fadeIn}
          >
            La gestion de projet
            <motion.span className="block text-primary" variants={fadeIn}>
              simplifiée et efficace
            </motion.span>
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
            variants={fadeIn}
          >
            ProjecTory vous aide à planifier, organiser et suivre vos projets
            avec des outils intuitifs et puissants.
          </motion.p>
          <motion.div
            className="mt-10 flex items-center justify-center gap-4"
            variants={fadeIn}
          >
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button size="lg">
                Commencer gratuitement
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowRight className="ml-2 h-4 w-4" />
                </motion.div>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button size="lg" variant="outline">
                Voir la démo
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section - Grid animation */}
      <motion.section
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <AnimatedFeatureCard
              icon={<FileText className="h-8 w-8 text-primary" />}
              title="Cahiers des charges"
              description="Créez et gérez vos cahiers des charges avec des modèles personnalisables"
            />
            <AnimatedFeatureCard
              icon={<Users className="h-8 w-8 text-primary" />}
              title="Collaboration"
              description="Travaillez en équipe en temps réel sur vos projets"
            />
            <AnimatedFeatureCard
              icon={<Calendar className="h-8 w-8 text-primary" />}
              title="Planning"
              description="Planifiez vos tâches et suivez leur avancement"
            />
            <AnimatedFeatureCard
              icon={<BarChart2 className="h-8 w-8 text-primary" />}
              title="Analytics"
              description="Analysez la performance de vos projets avec des tableaux de bord détaillés"
            />
          </div>
        </div>
      </motion.section>

      {/* Benefits Section - Staggered cards */}
      <motion.section
        className="border-t bg-muted/50 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="mb-12 text-center text-3xl font-bold"
            variants={fadeIn}
          >
            Pourquoi choisir ProjecTory ?
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <AnimatedBenefitCard key={index} benefit={benefit} />
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section - Scale up animation */}
      <motion.section
        className="border-t py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div variants={scaleIn}>
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="flex flex-col items-center justify-between gap-4 p-8 sm:flex-row">
                <motion.div variants={slideIn}>
                  <CardTitle className="text-2xl">Prêt à commencer ?</CardTitle>
                  <p className="mt-2 text-primary-foreground/90">
                    Rejoignez des milliers d'équipes qui utilisent déjà
                    ProjecTory
                  </p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} variants={slideIn}>
                  <Button size="lg" variant="secondary">
                    Essayer gratuitement
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

function AnimatedFeatureCard({
  icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <motion.div variants={scaleIn}>
      <Card className="h-full">
        <CardHeader>
          <motion.div
            className="mb-2 rounded-lg bg-primary/10 p-3 w-fit"
            whileHover={{ scale: 1.1 }}
          >
            {icon}
          </motion.div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function AnimatedBenefitCard({
  benefit,
}: {
  benefit: { title: string; description: string };
}) {
  return (
    <motion.div variants={fadeIn}>
      <Card>
        <CardContent className="flex items-start gap-4 pt-6">
          <motion.div
            className="rounded-full bg-primary/10 p-2"
            whileHover={{ scale: 1.1 }}
          >
            <CheckCircle2 className="h-5 w-5 text-primary" />
          </motion.div>
          <div>
            <h3 className="font-semibold">{benefit.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {benefit.description}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

const benefits = [
  {
    title: "Gain de temps" as string,
    description:
      "Automatisez les tâches répétitives et concentrez-vous sur l'essentiel" as string,
  },
  {
    title: "Visibilité complète" as string,
    description: "Suivez l'avancement de vos projets en temps réel" as string,
  },
  {
    title: "Collaboration simplifiée" as string,
    description:
      "Centralisez les échanges et les documents au même endroit" as string,
  },
  {
    title: "Méthodologies flexibles" as string,
    description: "Adaptez l'outil à votre façon de travailler" as string,
  },
  {
    title: "Prise de décision éclairée",
    description: "Accédez à des données et analyses pertinentes",
  },
  {
    title: "Support réactif",
    description: "Une équipe dédiée pour vous accompagner",
  },
];
