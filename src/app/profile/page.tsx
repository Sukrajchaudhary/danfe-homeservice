"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
      useMyProfile,
      useUpdateUser,
      useUpdateAboutMe,
      useAddCertificate,
      useRemoveCertificate,
      useAddPortfolioProject,
      useRemovePortfolioProject,
      useChangePassword,
      useMyLikedBlogs,
      useMyLocations,
} from "@/hooks";
import {
      User,
      Mail,
      Phone,
      MapPin,
      Award,
      Briefcase,
      Heart,
      Lock,
      Plus,
      Trash2,
      Edit,
      Save,
      X,
} from "lucide-react";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";

export default function ProfilePage() {
      const { data: profile, isLoading: profileLoading } = useMyProfile();
      const { data: likedBlogs } = useMyLikedBlogs();
      const { data: locations } = useMyLocations();
      const updateUserMutation = useUpdateUser();
      const updateAboutMeMutation = useUpdateAboutMe();
      const addCertificateMutation = useAddCertificate();
      const removeCertificateMutation = useRemoveCertificate();
      const addPortfolioMutation = useAddPortfolioProject();
      const removePortfolioMutation = useRemovePortfolioProject();
      const changePasswordMutation = useChangePassword();

      const [isEditingBasic, setIsEditingBasic] = useState(false);
      const [isEditingAbout, setIsEditingAbout] = useState(false);
      const [basicInfo, setBasicInfo] = useState({
            fullName: "",
            mobileNumber: "",
      });
      const [aboutInfo, setAboutInfo] = useState({
            professionalTitle: "",
            bio: "",
            skills: [] as string[],
      });
      const [newSkill, setNewSkill] = useState("");
      const [passwordData, setPasswordData] = useState({
            oldPassword: "",
            newPassword: "",
            confirmPassword: "",
      });

      // Initialize form data when profile loads
      if (profile && !isEditingBasic && !basicInfo.fullName) {
            setBasicInfo({
                  fullName: profile.fullName || "",
                  mobileNumber: profile.mobileNumber || "",
            });
      }

      if (profile && !isEditingAbout && !aboutInfo.professionalTitle) {
            setAboutInfo({
                  professionalTitle: profile.professionalTitle || "",
                  bio: profile.bio || "",
                  skills: profile.skills || [],
            });
      }

      const handleUpdateBasicInfo = () => {
            if (!profile) return;
            updateUserMutation.mutate(
                  { userId: profile._id, data: basicInfo },
                  {
                        onSuccess: () => {
                              toast.success("Profile updated successfully");
                              setIsEditingBasic(false);
                        },
                        onError: (error) => {
                              toast.error(error.message || "Failed to update profile");
                        },
                  }
            );
      };

      const handleUpdateAboutMe = () => {
            if (!profile) return;
            updateAboutMeMutation.mutate(
                  { userId: profile._id, data: aboutInfo },
                  {
                        onSuccess: () => {
                              toast.success("About section updated successfully");
                              setIsEditingAbout(false);
                        },
                        onError: (error) => {
                              toast.error(error.message || "Failed to update about section");
                        },
                  }
            );
      };

      const handleAddSkill = () => {
            if (newSkill.trim()) {
                  setAboutInfo({
                        ...aboutInfo,
                        skills: [...aboutInfo.skills, newSkill.trim()],
                  });
                  setNewSkill("");
            }
      };

      const handleRemoveSkill = (index: number) => {
            setAboutInfo({
                  ...aboutInfo,
                  skills: aboutInfo.skills.filter((_, i) => i !== index),
            });
      };

      const handleChangePassword = () => {
            if (!profile) return;
            if (passwordData.newPassword !== passwordData.confirmPassword) {
                  toast.error("Passwords do not match");
                  return;
            }
            changePasswordMutation.mutate(
                  { userId: profile._id, data: passwordData },
                  {
                        onSuccess: () => {
                              toast.success("Password changed successfully");
                              setPasswordData({
                                    oldPassword: "",
                                    newPassword: "",
                                    confirmPassword: "",
                              });
                        },
                        onError: (error) => {
                              toast.error(error.message || "Failed to change password");
                        },
                  }
            );
      };

      if (profileLoading) {
            return (
                  <div className="min-h-screen flex flex-col">
                        <Navbar />
                        <div className="flex-1 py-12">
                              <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                                    <Skeleton className="h-48 w-full mb-8" />
                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                          <Skeleton className="h-96" />
                                          <div className="lg:col-span-2 space-y-6">
                                                <Skeleton className="h-64" />
                                                <Skeleton className="h-64" />
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <Footer />
                  </div>
            );
      }

      if (!profile) {
            return (
                  <div className="min-h-screen flex flex-col">
                        <Navbar />
                        <div className="flex-1 flex items-center justify-center">
                              <Card className="max-w-md">
                                    <CardContent className="p-8 text-center">
                                          <User className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                                          <h2 className="text-xl font-bold mb-2">Please Sign In</h2>
                                          <p className="text-muted-foreground mb-4">
                                                You need to be signed in to view your profile
                                          </p>
                                          <Button asChild>
                                                <a href="/auth/login">Sign In</a>
                                          </Button>
                                    </CardContent>
                              </Card>
                        </div>
                        <Footer />
                  </div>
            );
      }

      return (
            <div className="min-h-screen flex flex-col">
                  <Navbar />

                  {/* Profile Header */}
                  <section className="relative overflow-hidden py-12 bg-linear-to-br from-emerald-500/10 to-green-500/10">
                        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                              <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex flex-col md:flex-row items-center gap-6"
                              >
                                    <Avatar className="h-32 w-32 border-4 border-background shadow-xl">
                                          <AvatarImage src={profile.profilePicture} />
                                          <AvatarFallback className="text-3xl bg-linear-to-br from-emerald-600 to-green-600 text-white">
                                                {profile.fullName
                                                      .split(" ")
                                                      .map((n) => n[0])
                                                      .join("")}
                                          </AvatarFallback>
                                    </Avatar>
                                    <div className="text-center md:text-left flex-1">
                                          <h1 className="text-3xl font-bold">{profile.fullName}</h1>
                                          {profile.professionalTitle && (
                                                <p className="text-lg text-muted-foreground mt-1">
                                                      {profile.professionalTitle}
                                                </p>
                                          )}
                                          <div className="flex flex-wrap gap-2 mt-3 justify-center md:justify-start">
                                                <Badge variant="secondary">
                                                      <Mail className="h-3 w-3 mr-1" />
                                                      {profile.email}
                                                </Badge>
                                                {profile.mobileNumber && (
                                                      <Badge variant="secondary">
                                                            <Phone className="h-3 w-3 mr-1" />
                                                            {profile.mobileNumber}
                                                      </Badge>
                                                )}
                                                <Badge
                                                      variant={profile.isActive ? "default" : "destructive"}
                                                      className={
                                                            profile.isActive
                                                                  ? "bg-emerald-500 hover:bg-emerald-600"
                                                                  : ""
                                                      }
                                                >
                                                      {profile.isActive ? "Active" : "Inactive"}
                                                </Badge>
                                          </div>
                                    </div>
                              </motion.div>
                        </div>
                  </section>

                  {/* Profile Content */}
                  <section className="flex-1 py-12">
                        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                              <Tabs defaultValue="overview" className="space-y-6">
                                    <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto p-1 bg-muted/50">
                                          <TabsTrigger value="overview">Overview</TabsTrigger>
                                          <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                                          <TabsTrigger value="activity">Activity</TabsTrigger>
                                          <TabsTrigger value="security">Security</TabsTrigger>
                                    </TabsList>

                                    {/* Overview Tab */}
                                    <TabsContent value="overview" className="space-y-6">
                                          {/* Basic Information */}
                                          <Card>
                                                <CardHeader className="flex flex-row items-center justify-between">
                                                      <CardTitle>Basic Information</CardTitle>
                                                      {!isEditingBasic ? (
                                                            <Button
                                                                  variant="outline"
                                                                  size="sm"
                                                                  onClick={() => setIsEditingBasic(true)}
                                                            >
                                                                  <Edit className="h-4 w-4 mr-2" />
                                                                  Edit
                                                            </Button>
                                                      ) : (
                                                            <div className="flex gap-2">
                                                                  <Button
                                                                        variant="outline"
                                                                        size="sm"
                                                                        onClick={() => setIsEditingBasic(false)}
                                                                  >
                                                                        <X className="h-4 w-4 mr-2" />
                                                                        Cancel
                                                                  </Button>
                                                                  <Button
                                                                        size="sm"
                                                                        onClick={handleUpdateBasicInfo}
                                                                        disabled={updateUserMutation.isPending}
                                                                  >
                                                                        <Save className="h-4 w-4 mr-2" />
                                                                        Save
                                                                  </Button>
                                                            </div>
                                                      )}
                                                </CardHeader>
                                                <CardContent className="space-y-4">
                                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                            <div>
                                                                  <Label>Full Name</Label>
                                                                  {isEditingBasic ? (
                                                                        <Input
                                                                              value={basicInfo.fullName}
                                                                              onChange={(e) =>
                                                                                    setBasicInfo({
                                                                                          ...basicInfo,
                                                                                          fullName: e.target.value,
                                                                                    })
                                                                              }
                                                                        />
                                                                  ) : (
                                                                        <p className="mt-1 text-muted-foreground">
                                                                              {profile.fullName}
                                                                        </p>
                                                                  )}
                                                            </div>
                                                            <div>
                                                                  <Label>Mobile Number</Label>
                                                                  {isEditingBasic ? (
                                                                        <Input
                                                                              value={basicInfo.mobileNumber}
                                                                              onChange={(e) =>
                                                                                    setBasicInfo({
                                                                                          ...basicInfo,
                                                                                          mobileNumber: e.target.value,
                                                                                    })
                                                                              }
                                                                        />
                                                                  ) : (
                                                                        <p className="mt-1 text-muted-foreground">
                                                                              {profile.mobileNumber || "Not provided"}
                                                                        </p>
                                                                  )}
                                                            </div>
                                                      </div>
                                                </CardContent>
                                          </Card>

                                          {/* About Me */}
                                          <Card>
                                                <CardHeader className="flex flex-row items-center justify-between">
                                                      <CardTitle>About Me</CardTitle>
                                                      {!isEditingAbout ? (
                                                            <Button
                                                                  variant="outline"
                                                                  size="sm"
                                                                  onClick={() => setIsEditingAbout(true)}
                                                            >
                                                                  <Edit className="h-4 w-4 mr-2" />
                                                                  Edit
                                                            </Button>
                                                      ) : (
                                                            <div className="flex gap-2">
                                                                  <Button
                                                                        variant="outline"
                                                                        size="sm"
                                                                        onClick={() => setIsEditingAbout(false)}
                                                                  >
                                                                        <X className="h-4 w-4 mr-2" />
                                                                        Cancel
                                                                  </Button>
                                                                  <Button
                                                                        size="sm"
                                                                        onClick={handleUpdateAboutMe}
                                                                        disabled={updateAboutMeMutation.isPending}
                                                                  >
                                                                        <Save className="h-4 w-4 mr-2" />
                                                                        Save
                                                                  </Button>
                                                            </div>
                                                      )}
                                                </CardHeader>
                                                <CardContent className="space-y-4">
                                                      <div>
                                                            <Label>Professional Title</Label>
                                                            {isEditingAbout ? (
                                                                  <Input
                                                                        value={aboutInfo.professionalTitle}
                                                                        onChange={(e) =>
                                                                              setAboutInfo({
                                                                                    ...aboutInfo,
                                                                                    professionalTitle: e.target.value,
                                                                              })
                                                                        }
                                                                        placeholder="e.g., Expert Plumber / Licensed Electrician"
                                                                  />
                                                            ) : (
                                                                  <p className="mt-1 text-muted-foreground">
                                                                        {profile.professionalTitle || "Not provided"}
                                                                  </p>
                                                            )}
                                                      </div>
                                                      <div>
                                                            <Label>Bio</Label>
                                                            {isEditingAbout ? (
                                                                  <Textarea
                                                                        value={aboutInfo.bio}
                                                                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                                                                              setAboutInfo({ ...aboutInfo, bio: e.target.value })
                                                                        }
                                                                        placeholder="Tell us about yourself..."
                                                                        rows={4}
                                                                  />
                                                            ) : (
                                                                  <p className="mt-1 text-muted-foreground">
                                                                        {profile.bio || "No bio provided"}
                                                                  </p>
                                                            )}
                                                      </div>
                                                      <div>
                                                            <Label>Skills</Label>
                                                            {isEditingAbout ? (
                                                                  <div className="space-y-2">
                                                                        <div className="flex gap-2">
                                                                              <Input
                                                                                    value={newSkill}
                                                                                    onChange={(e) => setNewSkill(e.target.value)}
                                                                                    placeholder="Add a skill"
                                                                                    onKeyPress={(e) => {
                                                                                          if (e.key === "Enter") {
                                                                                                e.preventDefault();
                                                                                                handleAddSkill();
                                                                                          }
                                                                                    }}
                                                                              />
                                                                              <Button
                                                                                    type="button"
                                                                                    onClick={handleAddSkill}
                                                                                    size="sm"
                                                                              >
                                                                                    <Plus className="h-4 w-4" />
                                                                              </Button>
                                                                        </div>
                                                                        <div className="flex flex-wrap gap-2">
                                                                              {aboutInfo.skills.map((skill, index) => (
                                                                                    <Badge
                                                                                          key={index}
                                                                                          variant="secondary"
                                                                                          className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground"
                                                                                          onClick={() => handleRemoveSkill(index)}
                                                                                    >
                                                                                          {skill}
                                                                                          <X className="h-3 w-3 ml-1" />
                                                                                    </Badge>
                                                                              ))}
                                                                        </div>
                                                                  </div>
                                                            ) : (
                                                                  <div className="flex flex-wrap gap-2 mt-2">
                                                                        {profile.skills && profile.skills.length > 0 ? (
                                                                              profile.skills.map((skill, index) => (
                                                                                    <Badge key={index} variant="secondary">
                                                                                          {skill}
                                                                                    </Badge>
                                                                              ))
                                                                        ) : (
                                                                              <p className="text-muted-foreground">
                                                                                    No skills added
                                                                              </p>
                                                                        )}
                                                                  </div>
                                                            )}
                                                      </div>
                                                </CardContent>
                                          </Card>

                                          {/* Address */}
                                          {profile.address && (
                                                <Card>
                                                      <CardHeader>
                                                            <CardTitle className="flex items-center gap-2">
                                                                  <MapPin className="h-5 w-5" />
                                                                  Address
                                                            </CardTitle>
                                                      </CardHeader>
                                                      <CardContent>
                                                            <p className="text-muted-foreground">
                                                                  {profile.address.street}, {profile.address.city},{" "}
                                                                  {profile.address.state}, {profile.address.country} -{" "}
                                                                  {profile.address.postalCode}
                                                            </p>
                                                      </CardContent>
                                                </Card>
                                          )}
                                    </TabsContent>

                                    {/* Portfolio Tab */}
                                    <TabsContent value="portfolio" className="space-y-6">
                                          {/* Certificates */}
                                          <Card>
                                                <CardHeader>
                                                      <CardTitle className="flex items-center gap-2">
                                                            <Award className="h-5 w-5" />
                                                            Certificates
                                                      </CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                      {profile.certificates && profile.certificates.length > 0 ? (
                                                            <div className="space-y-4">
                                                                  {profile.certificates.map((cert) => (
                                                                        <div
                                                                              key={cert._id}
                                                                              className="flex items-start justify-between p-4 border rounded-lg"
                                                                        >
                                                                              <div>
                                                                                    <h4 className="font-semibold">{cert.name}</h4>
                                                                                    <p className="text-sm text-muted-foreground">
                                                                                          {cert.issuingOrganization}
                                                                                    </p>
                                                                                    <p className="text-xs text-muted-foreground mt-1">
                                                                                          Issued: {new Date(cert.issueDate).toLocaleDateString()}
                                                                                    </p>
                                                                                    {cert.credentialUrl && (
                                                                                          <a
                                                                                                href={cert.credentialUrl}
                                                                                                target="_blank"
                                                                                                rel="noopener noreferrer"
                                                                                                className="text-xs text-emerald-600 hover:underline"
                                                                                          >
                                                                                                View Credential
                                                                                          </a>
                                                                                    )}
                                                                              </div>
                                                                              <Button
                                                                                    variant="ghost"
                                                                                    size="sm"
                                                                                    onClick={() =>
                                                                                          removeCertificateMutation.mutate({
                                                                                                userId: profile._id,
                                                                                                certificateId: cert._id,
                                                                                          })
                                                                                    }
                                                                              >
                                                                                    <Trash2 className="h-4 w-4 text-destructive" />
                                                                              </Button>
                                                                        </div>
                                                                  ))}
                                                            </div>
                                                      ) : (
                                                            <p className="text-muted-foreground text-center py-8">
                                                                  No certificates added yet
                                                            </p>
                                                      )}
                                                </CardContent>
                                          </Card>

                                          {/* Portfolio Projects */}
                                          <Card>
                                                <CardHeader>
                                                      <CardTitle className="flex items-center gap-2">
                                                            <Briefcase className="h-5 w-5" />
                                                            Portfolio Projects
                                                      </CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                      {profile.portfolio && profile.portfolio.length > 0 ? (
                                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                                  {profile.portfolio.map((project) => (
                                                                        <div
                                                                              key={project._id}
                                                                              className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                                                                        >
                                                                              {project.coverPhoto && (
                                                                                    <img
                                                                                          src={project.coverPhoto}
                                                                                          alt={project.title}
                                                                                          className="w-full h-32 object-cover"
                                                                                    />
                                                                              )}
                                                                              <div className="p-4">
                                                                                    <h4 className="font-semibold mb-2">
                                                                                          {project.title}
                                                                                    </h4>
                                                                                    <p className="text-sm text-muted-foreground mb-3">
                                                                                          {project.description}
                                                                                    </p>
                                                                                    <div className="flex flex-wrap gap-1 mb-3">
                                                                                          {project.skills.map((skill, i) => (
                                                                                                <Badge key={i} variant="outline" className="text-xs">
                                                                                                      {skill}
                                                                                                </Badge>
                                                                                          ))}
                                                                                    </div>
                                                                                    <div className="flex items-center justify-between">
                                                                                          {project.projectUrl && (
                                                                                                <a
                                                                                                      href={project.projectUrl}
                                                                                                      target="_blank"
                                                                                                      rel="noopener noreferrer"
                                                                                                      className="text-xs text-emerald-600 hover:underline"
                                                                                                >
                                                                                                      View Project
                                                                                                </a>
                                                                                          )}
                                                                                          <Button
                                                                                                variant="ghost"
                                                                                                size="sm"
                                                                                                onClick={() =>
                                                                                                      removePortfolioMutation.mutate({
                                                                                                            userId: profile._id,
                                                                                                            projectId: project._id,
                                                                                                      })
                                                                                                }
                                                                                          >
                                                                                                <Trash2 className="h-4 w-4 text-destructive" />
                                                                                          </Button>
                                                                                    </div>
                                                                              </div>
                                                                        </div>
                                                                  ))}
                                                            </div>
                                                      ) : (
                                                            <p className="text-muted-foreground text-center py-8">
                                                                  No portfolio projects added yet
                                                            </p>
                                                      )}
                                                </CardContent>
                                          </Card>
                                    </TabsContent>

                                    {/* Activity Tab */}
                                    <TabsContent value="activity" className="space-y-6">
                                          {/* Liked Blogs */}
                                          <Card>
                                                <CardHeader>
                                                      <CardTitle className="flex items-center gap-2">
                                                            <Heart className="h-5 w-5" />
                                                            Liked Blogs ({likedBlogs?.length || 0})
                                                      </CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                      {likedBlogs && likedBlogs.length > 0 ? (
                                                            <div className="space-y-3">
                                                                  {likedBlogs.slice(0, 5).map((blog) => (
                                                                        <div
                                                                              key={blog._id}
                                                                              className="flex items-center gap-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors"
                                                                        >
                                                                              <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                                                                              <div className="flex-1">
                                                                                    <h4 className="font-medium">{blog.title}</h4>
                                                                                    <p className="text-xs text-muted-foreground">
                                                                                          {new Date(blog.createdAt).toLocaleDateString()}
                                                                                    </p>
                                                                              </div>
                                                                        </div>
                                                                  ))}
                                                            </div>
                                                      ) : (
                                                            <p className="text-muted-foreground text-center py-8">
                                                                  No liked blogs yet
                                                            </p>
                                                      )}
                                                </CardContent>
                                          </Card>

                                          {/* Saved Locations */}
                                          <Card>
                                                <CardHeader>
                                                      <CardTitle className="flex items-center gap-2">
                                                            <MapPin className="h-5 w-5" />
                                                            Saved Locations ({locations?.length || 0})
                                                      </CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                      {locations && locations.length > 0 ? (
                                                            <div className="space-y-3">
                                                                  {locations.map((location) => (
                                                                        <div
                                                                              key={location._id}
                                                                              className="flex items-start gap-3 p-3 border rounded-lg"
                                                                        >
                                                                              <MapPin className="h-4 w-4 text-emerald-600 mt-1" />
                                                                              <div className="flex-1">
                                                                                    <p className="font-medium">{location.address}</p>
                                                                                    <p className="text-xs text-muted-foreground">
                                                                                          Lat: {location.latitude}, Long: {location.longitude}
                                                                                    </p>
                                                                              </div>
                                                                        </div>
                                                                  ))}
                                                            </div>
                                                      ) : (
                                                            <p className="text-muted-foreground text-center py-8">
                                                                  No saved locations
                                                            </p>
                                                      )}
                                                </CardContent>
                                          </Card>
                                    </TabsContent>

                                    {/* Security Tab */}
                                    <TabsContent value="security">
                                          <Card>
                                                <CardHeader>
                                                      <CardTitle className="flex items-center gap-2">
                                                            <Lock className="h-5 w-5" />
                                                            Change Password
                                                      </CardTitle>
                                                </CardHeader>
                                                <CardContent className="space-y-4">
                                                      <div>
                                                            <Label>Current Password</Label>
                                                            <Input
                                                                  type="password"
                                                                  value={passwordData.oldPassword}
                                                                  onChange={(e) =>
                                                                        setPasswordData({
                                                                              ...passwordData,
                                                                              oldPassword: e.target.value,
                                                                        })
                                                                  }
                                                            />
                                                      </div>
                                                      <div>
                                                            <Label>New Password</Label>
                                                            <Input
                                                                  type="password"
                                                                  value={passwordData.newPassword}
                                                                  onChange={(e) =>
                                                                        setPasswordData({
                                                                              ...passwordData,
                                                                              newPassword: e.target.value,
                                                                        })
                                                                  }
                                                            />
                                                      </div>
                                                      <div>
                                                            <Label>Confirm New Password</Label>
                                                            <Input
                                                                  type="password"
                                                                  value={passwordData.confirmPassword}
                                                                  onChange={(e) =>
                                                                        setPasswordData({
                                                                              ...passwordData,
                                                                              confirmPassword: e.target.value,
                                                                        })
                                                                  }
                                                            />
                                                      </div>
                                                      <Button
                                                            onClick={handleChangePassword}
                                                            disabled={changePasswordMutation.isPending}
                                                            className="w-full"
                                                      >
                                                            {changePasswordMutation.isPending
                                                                  ? "Changing..."
                                                                  : "Change Password"}
                                                      </Button>
                                                </CardContent>
                                          </Card>
                                    </TabsContent>
                              </Tabs>
                        </div>
                  </section>

                  <Footer />
            </div>
      );
}
