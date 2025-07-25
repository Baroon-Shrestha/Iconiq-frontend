import React, { useState, useEffect } from "react";
import {
  Calendar,
  User,
  ArrowRight,
  Tag,
  Search,
  TrendingUp,
  Clock,
  BookOpen,
  Trash2,
  Eye,
  EyeOff,
  MoreVertical,
  Edit,
} from "lucide-react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { REDNDER_URL } from "../../../url";

const categories = [
  "All",
  "Web Development",
  "Graphic Design",
  "Digital Marketing",
  "Video Production",
  "educational styling",
];

export default function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [categories, setCategories] = useState(["All"]);
  const navigate = useNavigate();
  const { admin } = useAuth();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const endpoint = admin
          ? `${REDNDER_URL}/blog/all-blog`
          : `${REDNDER_URL}/blog/blogs`;
        const res = await axios.get(endpoint, { withCredentials: true });
        setBlogs(res.data.blogs || []);
        setFilteredBlogs(res.data.blogs || []);
      } catch (err) {
        console.error("Error fetching blogs:", err.message);
      }
    };

    const fetchCategories = async () => {
      try {
        const res = await axios.get(`${REDNDER_URL}/blog/categories`, {
          withCredentials: true,
        });
        setCategories(["All", ...(res.data.categories || [])]);
      } catch (err) {
        console.error("Error fetching categories:", err.message);
      }
    };

    fetchBlogs();
    fetchCategories();
  }, [admin]);

  useEffect(() => {
    let filtered = blogs;

    if (selectedCategory !== "All") {
      filtered = filtered.filter((blog) =>
        blog.categories.includes(selectedCategory)
      );
    }

    if (searchTerm) {
      filtered = filtered.filter((blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredBlogs(filtered);
  }, [selectedCategory, searchTerm, blogs]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-container")) {
        setDropdownOpen(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (blogId, e) => {
    e.stopPropagation();
    setDropdownOpen(dropdownOpen === blogId ? null : blogId);
  };

  const handleTogglePublish = async (blogId, currentStatus, e) => {
    e.stopPropagation();
    setDropdownOpen(null);
    try {
      await axios.patch(
        `${REDNDER_URL}/blog/update-status/${blogId}`,
        { isPublished: !currentStatus },
        { withCredentials: true }
      );

      setBlogs((prevBlogs) =>
        prevBlogs.map((blog) =>
          blog._id === blogId ? { ...blog, isPublished: !currentStatus } : blog
        )
      );
    } catch (err) {
      console.error("Error updating publish status:", err.message);
    }
  };

  const handleEdit = (blogId, e) => {
    e.stopPropagation();
    setDropdownOpen(null);
    navigate(`/edit/${blogId}`);
  };

  const handleDelete = async (blogId, e) => {
    e.stopPropagation();
    setDropdownOpen(null);

    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        await axios.delete(`${REDNDER_URL}/blog/delete/${blogId}`, {
          withCredentials: true,
        });

        setBlogs((prevBlogs) =>
          prevBlogs.filter((blog) => blog._id !== blogId)
        );
      } catch (err) {
        console.error("Error deleting blog:", err.message);
      }
    }
  };

  const getShortPreview = (text) => {
    const words = text.trim().split(/\s+/).slice(0, 25);
    return words.join(" ") + (words.length >= 25 ? "..." : "");
  };

  const getLatestBlogs = () => {
    return blogs
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .slice(0, 4);
  };

  // Check if there are any blogs to show
  const hasBlogs = blogs.length > 0;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Blogs
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover insights, tutorials, and industry trends from our experts.
            Stay updated with the latest in technology, design, and digital
            innovation.
          </p>
        </div>
        {admin && (
          <div className="mb-6 text-right">
            <button
              onClick={() => navigate("/add")}
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-5 py-2 rounded-lg shadow"
            >
              + Add New Blog
            </button>
          </div>
        )}

        <div
          className={`grid gap-8 ${
            hasBlogs ? "grid-cols-1 lg:grid-cols-4" : "grid-cols-1"
          }`}
        >
          {/* Main Content */}
          <div className={hasBlogs ? "lg:col-span-3" : "col-span-1"}>
            {filteredBlogs.length === 0 ? (
              <div className="text-center py-16">
                <div className="max-w-md mx-auto">
                  <BookOpen className="w-24 h-24 text-gray-300 mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold text-gray-600 mb-4">
                    No Blogs Available
                  </h3>
                  <p className="text-gray-500 text-lg">
                    New blogs will be available soon. Stay tuned for exciting
                    content!
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
                {filteredBlogs.map((post, index) => (
                  <div
                    key={post._id}
                    onClick={() => navigate(`/blog/${post._id}`)}
                    className="cursor-pointer group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
                  >
                    <div className="relative">
                      <img
                        src={post.heroImage?.url}
                        alt={post.title}
                        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full shadow-lg">
                          <Tag className="w-3 h-3" />
                          {post.categories?.[0] || "General"}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {admin && (
                        <div className="absolute top-4 right-4 z-10">
                          <span
                            className={`inline-block px-2 py-1 text-xs font-semibold rounded-full shadow-md ${
                              post.isPublished
                                ? "bg-green-100 text-green-700"
                                : "bg-yellow-100 text-yellow-700"
                            }`}
                          >
                            {post.isPublished ? "Published" : "Draft"}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>Admin</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {new Date(post.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                      </div>

                      <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                        {post.title}
                      </h2>

                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {getShortPreview(post.shortDescription)}
                      </p>

                      <div className="flex items-center justify-between">
                        <button className="flex items-center gap-2 text-purple-600 hover:text-purple-800 font-semibold group-hover:gap-3 transition-all duration-300">
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </button>

                        {admin && (
                          <div className="dropdown-container relative">
                            <button
                              onClick={(e) => toggleDropdown(post._id, e)}
                              className="p-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full shadow-md transition-colors"
                              title="More actions"
                            >
                              <MoreVertical className="w-4 h-4" />
                            </button>

                            {dropdownOpen === post._id && (
                              <div className="absolute bottom-full right-0 mb-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-20">
                                <button
                                  onClick={(e) =>
                                    handleTogglePublish(
                                      post._id,
                                      post.isPublished,
                                      e
                                    )
                                  }
                                  className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 flex items-center gap-2"
                                >
                                  {post.isPublished ? (
                                    <>
                                      <EyeOff className="w-4 h-4" />
                                      Unpublish
                                    </>
                                  ) : (
                                    <>
                                      <Eye className="w-4 h-4" />
                                      Publish
                                    </>
                                  )}
                                </button>

                                <button
                                  onClick={(e) => handleEdit(post._id, e)}
                                  className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 flex items-center gap-2"
                                >
                                  <Edit className="w-4 h-4" />
                                  Edit
                                </button>

                                <button
                                  onClick={(e) => handleDelete(post._id, e)}
                                  className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 text-red-600 flex items-center gap-2"
                                >
                                  <Trash2 className="w-4 h-4" />
                                  Delete
                                </button>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar - Only show when there are blogs */}
          {hasBlogs && (
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Search Bar */}
                <div className="bg-white rounded-2xl shadow-md p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Search className="w-5 h-5 text-purple-600" />
                    Search Articles
                  </h3>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-white rounded-2xl shadow-md p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Tag className="w-5 h-5 text-purple-600" />
                    Categories
                  </h3>
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                          selectedCategory === category
                            ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md"
                            : "bg-gray-50 hover:bg-gray-100 text-gray-700"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Latest Posts */}
                <div className="bg-white rounded-2xl shadow-md p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-purple-600" />
                    Latest Posts
                  </h3>
                  {getLatestBlogs().length === 0 ? (
                    <div className="text-center py-8">
                      <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                      <p className="text-gray-500 text-sm">
                        No recent posts available
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {getLatestBlogs().map((post) => (
                        <div
                          key={post._id}
                          onClick={() => navigate(`/blog/${post._id}`)}
                          className="cursor-pointer group flex gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                        >
                          <img
                            src={post.heroImage?.url}
                            alt={post.title}
                            className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-medium text-gray-900 group-hover:text-purple-600 transition-colors duration-200 line-clamp-2">
                              {post.title}
                            </h4>
                            <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
                              <Calendar className="w-3 h-3" />
                              {new Date(post.createdAt).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
