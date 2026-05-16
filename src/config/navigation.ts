import type { LucideIcon } from 'lucide-react'
import {
	BookOpen,
	CalendarClock,
	Users,
	Mic2,
	Clapperboard,
	ScrollText,
} from 'lucide-react'

export interface NavigationItem {
	key: string // 用于翻译键，如 'codes' -> t('nav.codes')
	path: string // URL 路径，如 '/codes'
	icon: LucideIcon // Lucide 图标组件
	isContentType: boolean // 是否对应 content/ 目录
}

export const NAVIGATION_CONFIG: NavigationItem[] = [
	{ key: 'guide', path: '/guide', icon: BookOpen, isContentType: true },
	{ key: 'release', path: '/release', icon: CalendarClock, isContentType: true },
	{ key: 'characters', path: '/characters', icon: Users, isContentType: true },
	{ key: 'cast', path: '/cast', icon: Mic2, isContentType: true },
	{ key: 'trailer', path: '/trailer', icon: Clapperboard, isContentType: true },
	{ key: 'lore', path: '/lore', icon: ScrollText, isContentType: true },
]

// 从配置派生内容类型列表（用于路由和内容加载）
export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map(
	(item) => item.path.slice(1),
)

export type ContentType = (typeof CONTENT_TYPES)[number]

// 辅助函数：验证内容类型
export function isValidContentType(type: string): type is ContentType {
	return CONTENT_TYPES.includes(type as ContentType)
}
