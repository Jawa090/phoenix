import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { services } from '@/data/services';
import { locations } from '@/data/locations';
import { BASE_URL } from '@/lib/constants';

interface SEOData {
    title?: string;
    description?: string;
    keywords?: string;
    canonical?: string;
    robots?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    ogUrl?: string;
    twitterCard?: string;
    twitterTitle?: string;
    twitterDescription?: string;
    twitterImage?: string;
}

interface RedirectRule {
    from: string;
    to: string;
    type: '301' | '302';
}

interface Page {
    path: string;
    name: string;
    category: 'Main' | 'Service' | 'Location';
}

// Generate all pages
const generatePages = (): Page[] => {
    const mainPages: Page[] = [
        { path: '/', name: 'Home', category: 'Main' },
        { path: '/about/', name: 'About Us', category: 'Main' },
        { path: '/contact/', name: 'Contact', category: 'Main' },
        { path: '/services/', name: 'Services', category: 'Main' },
        { path: '/portfolio/', name: 'Portfolio', category: 'Main' },
        { path: '/samples/', name: 'Samples', category: 'Main' },
        { path: '/pricing/', name: 'Pricing', category: 'Main' },
        { path: '/privacy-policy/', name: 'Privacy Policy', category: 'Main' },
        { path: '/terms-of-service/', name: 'Terms of Service', category: 'Main' },
    ];

    // Service pages
    const servicePages: Page[] = services.map(service => ({
        path: `/services/${service.slug}/`,
        name: service.title,
        category: 'Service' as const
    }));

    // Location pages
    const locationPages: Page[] = locations.map(location => ({
        path: `/locations/${location.slug}/`,
        name: location.title,
        category: 'Location' as const
    }));

    return [...mainPages, ...servicePages, ...locationPages];
};

const pages = generatePages();

const defaultSEO: SEOData = {
    title: 'Phoenix Estimating - Professional Construction Estimating',
    description: 'Expert construction estimating services including quantity takeoffs, cost estimation, and bid preparation. Accurate estimates for residential & commercial projects.',
    robots: 'index, follow',
    canonical: `${BASE_URL}/`,
    ogTitle: 'Phoenix Estimating - Professional Construction Estimating Services',
    ogDescription: 'Expert construction estimating services including quantity takeoffs, cost estimation, and bid preparation for all types of construction projects.',
    ogUrl: `${BASE_URL}/`,
    ogImage: `${BASE_URL}/logo.png`,
    twitterCard: 'summary_large_image',
    twitterTitle: 'Phoenix Estimating - Professional Construction Estimating',
    twitterDescription: 'Expert construction estimating services including quantity takeoffs, cost estimation, and bid preparation for construction projects.',
    twitterImage: `${BASE_URL}/logo.png`,
};

export default function SEOManager() {
    const [selectedPage, setSelectedPage] = useState<string | null>(null);
    const [seoData, setSeoData] = useState<SEOData>(defaultSEO);
    const [allSeoData, setAllSeoData] = useState<Record<string, SEOData>>({});
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [isLoading, setIsLoading] = useState(false);
    const [savedPages, setSavedPages] = useState<Set<string>>(new Set());
    const [activeTab, setActiveTab] = useState<'seo' | 'redirects'>('seo');
    const [redirects, setRedirects] = useState<RedirectRule[]>([]);
    const [newRedirect, setNewRedirect] = useState<RedirectRule>({
        from: '',
        to: '',
        type: '301'
    });
    const { toast } = useToast();

    const categories = ['All', 'Main', 'Service', 'Location'];
    
    const filteredPages = pages.filter(page => {
        const matchesSearch = page.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            page.path.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || page.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    // Load SEO data
    useEffect(() => {
        fetch('/api/seo')
            .then((res) => res.json())
            .then((data) => {
                if (data && typeof data === 'object') {
                    setAllSeoData(data);
                }
            })
            .catch((error) => {
                console.error('Failed to load SEO data:', error);
            });

        // Load redirects
        fetch('/api/redirects')
            .then((res) => res.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    setRedirects(data);
                }
            })
            .catch((error) => {
                console.error('Failed to load redirects:', error);
            });
    }, []);

    const checkSEOStatus = (path: string): boolean => {
        // Check if page was recently saved (will show green)
        if (savedPages.has(path)) {
            return true;
        }

        // Check existing JSON data
        const jsonData = allSeoData[path];
        if (!jsonData) return false;

        const data = jsonData;
        const hasValidTitle = data.title && data.title.length > 10;
        const hasValidDescription = data.description && data.description.length > 50;
        const hasValidCanonical = data.canonical && !data.canonical.includes('yourdomain.com');

        return hasValidTitle && hasValidDescription && hasValidCanonical;
    };

    const getPageDefaults = (path: string, pageName: string): SEOData => {
        const baseUrl = BASE_URL;
        const isLocationPage = path.includes('/locations/');
        const isServicePage = path.includes('/services/');
        
        if (isLocationPage) {
            const location = locations.find(loc => path.includes(`/${loc.slug}/`));
            if (location) {
                return {
                    title: `${location.title} - Phoenix Estimating`,
                    description: location.metaDescription || `Professional construction estimating services in ${location.title}. Get accurate cost estimates and quantity takeoffs.`,
                    robots: 'index, follow',
                    canonical: `${baseUrl}${path}`,
                    ogTitle: `${location.title} - Phoenix Estimating`,
                    ogDescription: location.metaDescription || `Professional construction estimating services in ${location.title}.`,
                    ogUrl: `${baseUrl}${path}`,
                    ogImage: `${baseUrl}/logo.png`,
                    twitterCard: 'summary_large_image',
                    twitterTitle: `${location.title} - Phoenix Estimating`,
                    twitterDescription: location.metaDescription || `Professional construction estimating services in ${location.title}.`,
                    twitterImage: `${baseUrl}/logo.png`,
                };
            }
        }
        
        if (isServicePage) {
            const service = services.find(s => path.includes(`/${s.slug}/`));
            if (service) {
                return {
                    title: `${service.title} - Phoenix Estimating`,
                    description: service.shortDesc || `Professional ${service.title.toLowerCase()}. Get accurate cost estimates and quantity takeoffs.`,
                    robots: 'index, follow',
                    canonical: `${baseUrl}${path}`,
                    ogTitle: `${service.title} - Phoenix Estimating`,
                    ogDescription: service.shortDesc || `Professional ${service.title.toLowerCase()}.`,
                    ogUrl: `${baseUrl}${path}`,
                    ogImage: `${baseUrl}/logo.png`,
                    twitterCard: 'summary_large_image',
                    twitterTitle: `${service.title} - Phoenix Estimating`,
                    twitterDescription: service.shortDesc || `Professional ${service.title.toLowerCase()}.`,
                    twitterImage: `${baseUrl}/logo.png`,
                };
            }
        }
        
        return {
            title: `${pageName} - Phoenix Estimating`,
            description: `Professional construction estimating services for ${pageName.toLowerCase()}. Get accurate cost estimates and quantity takeoffs.`,
            robots: 'index, follow',
            canonical: `${baseUrl}${path}`,
            ogTitle: `${pageName} - Phoenix Estimating`,
            ogDescription: `Professional construction estimating services for ${pageName.toLowerCase()}. Get accurate cost estimates and quantity takeoffs.`,
            ogUrl: `${baseUrl}${path}`,
            ogImage: `${baseUrl}/logo.png`,
            twitterCard: 'summary_large_image',
            twitterTitle: `${pageName} - Phoenix Estimating`,
            twitterDescription: `Professional construction estimating services for ${pageName.toLowerCase()}. Get accurate cost estimates and quantity takeoffs.`,
            twitterImage: `${baseUrl}/logo.png`,
        };
    };

    const handleEdit = (path: string) => {
        const jsonData = allSeoData[path];
        const page = pages.find(p => p.path === path);
        
        if (jsonData) {
            setSeoData(jsonData);
        } else {
            setSeoData(getPageDefaults(path, page?.name || 'Page'));
        }
        setSelectedPage(path);
    };

    const handleSave = async () => {
        if (!selectedPage) return;
        
        setIsLoading(true);
        
        try {
            const updatedData = {
                ...allSeoData,
                [selectedPage]: seoData
            };

            const response = await fetch('/api/seo', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedData),
            });

            if (response.ok) {
                setAllSeoData(updatedData);
                setSavedPages(prev => new Set([...prev, selectedPage]));
                
                toast({
                    title: 'SEO Data Saved Successfully! 🎉',
                    description: 'Changes automatically saved to JSON file. Commit and deploy to see changes on live site.',
                });
                setSelectedPage(null);
            } else {
                throw new Error('Failed to save to JSON file');
            }
        } catch (error) {
            toast({
                title: 'Save Failed',
                description: 'There was an error saving the SEO data. Please try again.',
                variant: 'destructive'
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleCancel = () => {
        setSelectedPage(null);
    };

    // Redirect management functions
    const handleAddRedirect = async () => {
        if (!newRedirect.from || !newRedirect.to) {
            toast({
                title: 'Error',
                description: 'Please fill in both From URL and To URL fields.',
                variant: 'destructive'
            });
            return;
        }

        const updatedRedirects = [...redirects, { ...newRedirect, from: newRedirect.from.startsWith('/') ? newRedirect.from : `/${newRedirect.from}`, to: newRedirect.to.startsWith('/') ? newRedirect.to : `/${newRedirect.to}` }];
        
        try {
            const response = await fetch('/api/redirects', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedRedirects),
            });

            if (response.ok) {
                setRedirects(updatedRedirects);
                setNewRedirect({ from: '', to: '', type: '301' });
                toast({
                    title: 'Redirect Added & Active! 🎉',
                    description: 'New redirect rule is now working on your site.',
                });
            } else {
                throw new Error('Failed to add redirect');
            }
        } catch (error) {
            toast({
                title: 'Error',
                description: 'Failed to add redirect. Please try again.',
                variant: 'destructive'
            });
        }
    };

    const handleDeleteRedirect = async (index: number) => {
        const updatedRedirects = redirects.filter((_, i) => i !== index);
        
        try {
            const response = await fetch('/api/redirects', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedRedirects),
            });

            if (response.ok) {
                setRedirects(updatedRedirects);
                toast({
                    title: 'Redirect Deleted',
                    description: 'Redirect rule has been removed.',
                });
            }
        } catch (error) {
            toast({
                title: 'Error',
                description: 'Failed to delete redirect. Please try again.',
                variant: 'destructive'
            });
        }
    };

    const handleUpdateRedirect = async (index: number, updates: Partial<RedirectRule>) => {
        const updatedRedirects = redirects.map((redirect, i) => 
            i === index ? { ...redirect, ...updates } : redirect
        );
        
        try {
            const response = await fetch('/api/redirects', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedRedirects),
            });

            if (response.ok) {
                setRedirects(updatedRedirects);
                toast({
                    title: 'Redirect Updated',
                    description: 'Changes have been saved.',
                });
            }
        } catch (error) {
            toast({
                title: 'Error',
                description: 'Failed to update redirect. Please try again.',
                variant: 'destructive'
            });
        }
    };

    if (selectedPage) {
        return (
            <div className="container mx-auto p-6 max-w-4xl">
                <Button onClick={handleCancel} variant="ghost" className="mb-4">
                    ← Back to SEO Manager
                </Button>
                <Card>
                    <CardHeader>
                        <CardTitle>Edit SEO Tags - {pages.find(p => p.path === selectedPage)?.name}</CardTitle>
                        <p className="text-sm text-gray-600">
                            Changes will automatically update the JSON file and work on live site after deployment.
                        </p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label>Title (Max 70 characters)</Label>
                            <Input 
                                value={seoData.title || ''} 
                                onChange={(e) => setSeoData({ ...seoData, title: e.target.value })} 
                                maxLength={70} 
                                className={seoData.title && seoData.title.length > 60 ? 'border-yellow-500' : seoData.title && seoData.title.length > 70 ? 'border-red-500' : ''}
                            />
                            <div className="flex justify-between text-xs">
                                <span className={seoData.title && seoData.title.length > 70 ? 'text-red-500' : seoData.title && seoData.title.length > 60 ? 'text-yellow-500' : 'text-gray-500'}>
                                    {seoData.title?.length || 0}/70 characters
                                </span>
                                <span className="text-gray-400">
                                    {seoData.title && seoData.title.length <= 60 ? '✅ Optimal' : seoData.title && seoData.title.length <= 70 ? '⚠️ Long' : '❌ Too Long'}
                                </span>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label>Description (Max 170 characters)</Label>
                            <Textarea 
                                value={seoData.description || ''} 
                                onChange={(e) => setSeoData({ ...seoData, description: e.target.value })} 
                                maxLength={170} 
                                rows={3} 
                                className={seoData.description && seoData.description.length > 160 ? 'border-yellow-500' : seoData.description && seoData.description.length > 170 ? 'border-red-500' : ''}
                            />
                            <div className="flex justify-between text-xs">
                                <span className={seoData.description && seoData.description.length > 170 ? 'text-red-500' : seoData.description && seoData.description.length > 160 ? 'text-yellow-500' : 'text-gray-500'}>
                                    {seoData.description?.length || 0}/170 characters
                                </span>
                                <span className="text-gray-400">
                                    {seoData.description && seoData.description.length <= 160 ? '✅ Optimal' : seoData.description && seoData.description.length <= 170 ? '⚠️ Long' : '❌ Too Long'}
                                </span>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label>Keywords</Label>
                            <Input 
                                value={seoData.keywords || ''} 
                                onChange={(e) => setSeoData({ ...seoData, keywords: e.target.value })} 
                            />
                        </div>

                        <div className="space-y-2">
                            <Label>Robots</Label>
                            <Input 
                                value={seoData.robots || 'index, follow'} 
                                onChange={(e) => setSeoData({ ...seoData, robots: e.target.value })} 
                            />
                        </div>

                        <div className="space-y-2">
                            <Label>Canonical URL</Label>
                            <Input 
                                value={seoData.canonical || ''} 
                                onChange={(e) => setSeoData({ ...seoData, canonical: e.target.value })} 
                            />
                        </div>

                        <h3 className="font-semibold text-lg mt-8 mb-4">Open Graph Tags</h3>

                        <div className="space-y-2">
                            <Label>OG Title (Max 70 characters)</Label>
                            <Input 
                                value={seoData.ogTitle || ''} 
                                onChange={(e) => setSeoData({ ...seoData, ogTitle: e.target.value })} 
                                maxLength={70}
                                className={seoData.ogTitle && seoData.ogTitle.length > 60 ? 'border-yellow-500' : seoData.ogTitle && seoData.ogTitle.length > 70 ? 'border-red-500' : ''}
                            />
                            <div className="flex justify-between text-xs">
                                <span className={seoData.ogTitle && seoData.ogTitle.length > 70 ? 'text-red-500' : seoData.ogTitle && seoData.ogTitle.length > 60 ? 'text-yellow-500' : 'text-gray-500'}>
                                    {seoData.ogTitle?.length || 0}/70 characters
                                </span>
                                <span className="text-gray-400">
                                    {seoData.ogTitle && seoData.ogTitle.length <= 60 ? '✅ Optimal' : seoData.ogTitle && seoData.ogTitle.length <= 70 ? '⚠️ Long' : '❌ Too Long'}
                                </span>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label>OG Description (Max 170 characters)</Label>
                            <Textarea 
                                value={seoData.ogDescription || ''} 
                                onChange={(e) => setSeoData({ ...seoData, ogDescription: e.target.value })} 
                                rows={2} 
                                maxLength={170}
                                className={seoData.ogDescription && seoData.ogDescription.length > 160 ? 'border-yellow-500' : seoData.ogDescription && seoData.ogDescription.length > 170 ? 'border-red-500' : ''}
                            />
                            <div className="flex justify-between text-xs">
                                <span className={seoData.ogDescription && seoData.ogDescription.length > 170 ? 'text-red-500' : seoData.ogDescription && seoData.ogDescription.length > 160 ? 'text-yellow-500' : 'text-gray-500'}>
                                    {seoData.ogDescription?.length || 0}/170 characters
                                </span>
                                <span className="text-gray-400">
                                    {seoData.ogDescription && seoData.ogDescription.length <= 160 ? '✅ Optimal' : seoData.ogDescription && seoData.ogDescription.length <= 170 ? '⚠️ Long' : '❌ Too Long'}
                                </span>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label>OG URL</Label>
                            <Input 
                                value={seoData.ogUrl || ''} 
                                onChange={(e) => setSeoData({ ...seoData, ogUrl: e.target.value })} 
                            />
                        </div>

                        <div className="space-y-2">
                            <Label>OG Image</Label>
                            <Input 
                                value={seoData.ogImage || ''} 
                                onChange={(e) => setSeoData({ ...seoData, ogImage: e.target.value })} 
                            />
                        </div>

                        <h3 className="font-semibold text-lg mt-8 mb-4">Twitter Tags</h3>

                        <div className="space-y-2">
                            <Label>Twitter Card</Label>
                            <Input 
                                value={seoData.twitterCard || 'summary_large_image'} 
                                onChange={(e) => setSeoData({ ...seoData, twitterCard: e.target.value })} 
                            />
                        </div>

                        <div className="space-y-2">
                            <Label>Twitter Title (Max 70 characters)</Label>
                            <Input 
                                value={seoData.twitterTitle || ''} 
                                onChange={(e) => setSeoData({ ...seoData, twitterTitle: e.target.value })} 
                                maxLength={70}
                                className={seoData.twitterTitle && seoData.twitterTitle.length > 60 ? 'border-yellow-500' : seoData.twitterTitle && seoData.twitterTitle.length > 70 ? 'border-red-500' : ''}
                            />
                            <div className="flex justify-between text-xs">
                                <span className={seoData.twitterTitle && seoData.twitterTitle.length > 70 ? 'text-red-500' : seoData.twitterTitle && seoData.twitterTitle.length > 60 ? 'text-yellow-500' : 'text-gray-500'}>
                                    {seoData.twitterTitle?.length || 0}/70 characters
                                </span>
                                <span className="text-gray-400">
                                    {seoData.twitterTitle && seoData.twitterTitle.length <= 60 ? '✅ Optimal' : seoData.twitterTitle && seoData.twitterTitle.length <= 70 ? '⚠️ Long' : '❌ Too Long'}
                                </span>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label>Twitter Description (Max 170 characters)</Label>
                            <Textarea 
                                value={seoData.twitterDescription || ''} 
                                onChange={(e) => setSeoData({ ...seoData, twitterDescription: e.target.value })} 
                                rows={2} 
                                maxLength={170}
                                className={seoData.twitterDescription && seoData.twitterDescription.length > 160 ? 'border-yellow-500' : seoData.twitterDescription && seoData.twitterDescription.length > 170 ? 'border-red-500' : ''}
                            />
                            <div className="flex justify-between text-xs">
                                <span className={seoData.twitterDescription && seoData.twitterDescription.length > 170 ? 'text-red-500' : seoData.twitterDescription && seoData.twitterDescription.length > 160 ? 'text-yellow-500' : 'text-gray-500'}>
                                    {seoData.twitterDescription?.length || 0}/170 characters
                                </span>
                                <span className="text-gray-400">
                                    {seoData.twitterDescription && seoData.twitterDescription.length <= 160 ? '✅ Optimal' : seoData.twitterDescription && seoData.twitterDescription.length <= 170 ? '⚠️ Long' : '❌ Too Long'}
                                </span>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label>Twitter Image</Label>
                            <Input 
                                value={seoData.twitterImage || ''} 
                                onChange={(e) => setSeoData({ ...seoData, twitterImage: e.target.value })} 
                            />
                        </div>

                        <div className="flex gap-4 pt-4">
                            <Button 
                                onClick={handleSave} 
                                className="flex-1" 
                                disabled={isLoading}
                            >
                                {isLoading ? 'Saving...' : 'Save SEO Tags'}
                            </Button>
                            <Button onClick={handleCancel} variant="outline" className="flex-1">
                                Cancel
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }

    const completedCount = filteredPages.filter(page => checkSEOStatus(page.path)).length;
    const totalCount = filteredPages.length;

    return (
        <div className="container mx-auto p-6 max-w-6xl">
            <div className="mb-6">
                <h1 className="text-3xl font-bold mb-2">SEO Manager</h1>
                <p className="text-gray-600">
                    Manage SEO tags and URL redirects. Changes automatically update and work on live site after deployment.
                </p>
            </div>

            {/* Tab Navigation */}
            <div className="mb-6">
                <div className="flex gap-2">
                    <Button
                        variant={activeTab === 'seo' ? 'default' : 'outline'}
                        onClick={() => setActiveTab('seo')}
                    >
                        SEO Tags
                    </Button>
                    <Button
                        variant={activeTab === 'redirects' ? 'default' : 'outline'}
                        onClick={() => setActiveTab('redirects')}
                    >
                        URL Redirects
                    </Button>
                </div>
            </div>

            {activeTab === 'seo' && (
                <>
                    <Card className="mb-6">
                        <CardContent className="pt-6">
                            <div className="flex flex-col md:flex-row gap-4 mb-4">
                                <div className="flex-1">
                                    <Input
                                        placeholder="Search pages..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>
                                <div className="flex gap-2">
                                    {categories.map(category => (
                                        <Button
                                            key={category}
                                            variant={selectedCategory === category ? 'default' : 'outline'}
                                            onClick={() => setSelectedCategory(category)}
                                            size="sm"
                                        >
                                            {category}
                                        </Button>
                                    ))}
                                </div>
                            </div>
                            <div className="text-sm text-gray-600">
                                Showing {totalCount} pages • {completedCount} completed • {totalCount - completedCount} incomplete
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Pages ({totalCount})</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3 max-h-[600px] overflow-y-auto">
                                {filteredPages.map((page) => {
                                    const isComplete = checkSEOStatus(page.path);
                                    return (
                                        <div key={page.path} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                                            <div className="flex items-center gap-3 flex-1 min-w-0">
                                                <div className={`w-4 h-4 rounded-full flex-shrink-0 ${isComplete ? 'bg-green-500' : 'bg-red-500'}`} title={isComplete ? 'SEO Complete' : 'SEO Incomplete'} />
                                                <div className="min-w-0 flex-1">
                                                    <h3 className="font-semibold truncate">{page.name}</h3>
                                                    <p className="text-sm text-gray-500 truncate">{page.path}</p>
                                                </div>
                                                <span className="text-xs bg-gray-100 px-2 py-1 rounded flex-shrink-0">{page.category}</span>
                                            </div>
                                            <Button onClick={() => handleEdit(page.path)} className="ml-4 flex-shrink-0">
                                                Edit
                                            </Button>
                                        </div>
                                    );
                                })}
                                {filteredPages.length === 0 && (
                                    <div className="text-center py-8 text-gray-500">
                                        No pages found matching your search.
                                    </div>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </>
            )}

            {activeTab === 'redirects' && (
                <>
                    {/* Add New Redirect */}
                    <Card className="mb-6">
                        <CardHeader>
                            <CardTitle>Add New Redirect</CardTitle>
                            <p className="text-sm text-gray-600">
                                Create URL redirects to redirect old URLs to new ones. Use 301 for permanent redirects (SEO friendly).
                            </p>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                <div className="space-y-2">
                                    <Label>From URL</Label>
                                    <Input
                                        placeholder="/old-page/"
                                        value={newRedirect.from}
                                        onChange={(e) => setNewRedirect({ ...newRedirect, from: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label>To URL</Label>
                                    <Input
                                        placeholder="/new-page/"
                                        value={newRedirect.to}
                                        onChange={(e) => setNewRedirect({ ...newRedirect, to: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label>Type</Label>
                                    <select
                                        className="w-full p-2 border rounded-md"
                                        value={newRedirect.type}
                                        onChange={(e) => setNewRedirect({ ...newRedirect, type: e.target.value as '301' | '302' })}
                                    >
                                        <option value="301">301 (Permanent)</option>
                                        <option value="302">302 (Temporary)</option>
                                    </select>
                                </div>
                                <div className="flex items-end">
                                    <Button onClick={handleAddRedirect} className="w-full">
                                        Add Redirect
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Existing Redirects */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Existing Redirects ({redirects.length})</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {redirects.length === 0 ? (
                                <div className="text-center py-8 text-gray-500">
                                    No redirects configured yet. Add your first redirect above.
                                </div>
                            ) : (
                                <div className="space-y-2">
                                    {redirects.map((redirect, index) => (
                                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                                            <div className="flex items-center gap-3 flex-1 min-w-0">
                                                <div className="min-w-0 flex-1">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <Input
                                                            value={redirect.from}
                                                            onChange={(e) => handleUpdateRedirect(index, { from: e.target.value })}
                                                            className="text-sm"
                                                            placeholder="From URL"
                                                        />
                                                        <span className="text-gray-400">→</span>
                                                        <Input
                                                            value={redirect.to}
                                                            onChange={(e) => handleUpdateRedirect(index, { to: e.target.value })}
                                                            className="text-sm"
                                                            placeholder="To URL"
                                                        />
                                                    </div>
                                                    <p className="text-xs text-gray-500">
                                                        {redirect.type} redirect
                                                    </p>
                                                </div>
                                                <div className="flex gap-2 flex-shrink-0">
                                                    <select
                                                        value={redirect.type}
                                                        onChange={(e) => handleUpdateRedirect(index, { type: e.target.value as '301' | '302' })}
                                                        className="text-xs p-1 border rounded"
                                                    >
                                                        <option value="301">301</option>
                                                        <option value="302">302</option>
                                                    </select>
                                                    <Button
                                                        size="sm"
                                                        variant="destructive"
                                                        onClick={() => handleDeleteRedirect(index)}
                                                    >
                                                        Delete
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </>
            )}
        </div>
    );
}
