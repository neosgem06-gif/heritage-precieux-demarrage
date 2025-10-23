import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

export default function DepotForm() {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    brand: "",
    category: "",
    description: "",
    condition: "",
    purchaseYear: "",
    estimatedValue: "",
  });
  const [photos, setPhotos] = useState<File[]>([]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      if (filesArray.length + photos.length > 5) {
        toast.error("Maximum 5 photos autorisées");
        return;
      }
      setPhotos((prev) => [...prev, ...filesArray]);
    }
  };

  const removePhoto = (index: number) => {
    setPhotos((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.description) {
      toast.error("Veuillez remplir tous les champs obligatoires");
      return;
    }

    if (photos.length === 0) {
      toast.error("Veuillez ajouter au moins une photo");
      return;
    }

    setIsSubmitting(true);

    // Simulation d'envoi (à remplacer par votre API)
    setTimeout(() => {
      toast.success(
        "Merci ! Votre demande a été envoyée. Nous vous contacterons sous 48h."
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        brand: "",
        category: "",
        description: "",
        condition: "",
        purchaseYear: "",
        estimatedValue: "",
      });
      setPhotos([]);
      setIsSubmitting(false);
      setOpen(false);
    }, 1500);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="lg"
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
        >
          Proposer mes objets
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-primary">
            Proposer un Objet en Dépôt-Vente
          </DialogTitle>
          <DialogDescription>
            Remplissez ce formulaire pour nous confier vos pièces de luxe. Nous
            vous contacterons sous 48h pour évaluer votre objet.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          {/* Informations personnelles */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Vos Coordonnées
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">
                  Nom complet <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Jean Dupont"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">
                  Email <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="jean.dupont@example.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Téléphone</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+33 6 12 34 56 78"
              />
            </div>
          </div>

          {/* Informations sur l'objet */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Votre Objet
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="category">
                  Catégorie <span className="text-destructive">*</span>
                </Label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  required
                >
                  <option value="">Sélectionnez une catégorie</option>
                  <option value="sac">Sac à main</option>
                  <option value="bijou">Bijou</option>
                  <option value="montre">Montre</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="brand">
                  Marque <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="brand"
                  name="brand"
                  value={formData.brand}
                  onChange={handleInputChange}
                  placeholder="Chanel, Hermès, Dior..."
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">
                Description détaillée <span className="text-destructive">*</span>
              </Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Décrivez votre objet : modèle, couleur, taille, état général, accessoires inclus..."
                rows={4}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="condition">État</Label>
                <select
                  id="condition"
                  name="condition"
                  value={formData.condition}
                  onChange={handleInputChange}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <option value="">Sélectionnez</option>
                  <option value="neuf">Neuf avec étiquette</option>
                  <option value="excellent">Excellent état</option>
                  <option value="tres-bon">Très bon état</option>
                  <option value="bon">Bon état</option>
                  <option value="correct">État correct</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="purchaseYear">Année d'achat</Label>
                <Input
                  id="purchaseYear"
                  name="purchaseYear"
                  type="number"
                  value={formData.purchaseYear}
                  onChange={handleInputChange}
                  placeholder="2020"
                  min="1900"
                  max={new Date().getFullYear()}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="estimatedValue">Prix d'achat estimé (€)</Label>
                <Input
                  id="estimatedValue"
                  name="estimatedValue"
                  type="number"
                  value={formData.estimatedValue}
                  onChange={handleInputChange}
                  placeholder="2000"
                  min="0"
                />
              </div>
            </div>
          </div>

          {/* Photos */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="photos">
                Photos <span className="text-destructive">*</span>
                <span className="text-xs text-muted-foreground ml-2">
                  (Maximum 5 photos)
                </span>
              </Label>
              <Input
                id="photos"
                type="file"
                accept="image/*"
                multiple
                onChange={handlePhotoChange}
                className="cursor-pointer"
                disabled={photos.length >= 5}
              />
              <p className="text-xs text-muted-foreground">
                Ajoutez des photos claires de votre objet sous différents angles
              </p>
            </div>

            {photos.length > 0 && (
              <div className="grid grid-cols-3 gap-3">
                {photos.map((photo, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt={`Photo ${index + 1}`}
                      className="w-full h-24 object-cover rounded-lg border border-border"
                    />
                    <button
                      type="button"
                      onClick={() => removePhoto(index)}
                      className="absolute top-1 right-1 bg-destructive text-destructive-foreground rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Note importante */}
          <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
            <p className="text-sm text-foreground/90">
              <strong className="text-primary">Note :</strong> Nous évaluerons
              votre objet et vous proposerons une estimation de prix de vente.
              Notre commission est de 30% sur le prix de vente final.
            </p>
          </div>

          {/* Boutons */}
          <div className="flex gap-3 justify-end pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              disabled={isSubmitting}
            >
              Annuler
            </Button>
            <Button
              type="submit"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

